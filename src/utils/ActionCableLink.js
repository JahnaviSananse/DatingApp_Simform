import {ApolloLink, Observable} from 'apollo-link';
import JwtDecode from 'jwt-decode';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const printer = require('graphql/language/printer');

function ActionCableLink(options, token) {
  const {cable, actionCable} = options;
  const {connectionParams = {}} = options;
  const channelName = options.channelName || 'GraphqlChannel';
  const actionName = options.actionName || 'execute';

  return new ApolloLink(
    (operation) =>
      new Observable((observer) => {
        const channelId = Math.round(
          Date.now() + Math.random() * 100000,
        ).toString(16);

        // Add the user id to params
        const dto = JwtDecode(token);
        operation.variables.userAccountId = dto.user_id.toString();

        const channel = cable.setChannel(
          'GraphqlChannel', // channel name to which we will pass data from Rails app with `stream_from`
          actionCable.subscriptions.create({
            channel: channelName,
            channelId,
            ...connectionParams,
          }),
        );

        channel
          .on('connected', function () {
            this.perform(actionName, {
              operationId: operation.operationId,
              operationName: operation.operationName,
              query: operation.query ? printer.print(operation.query) : null,
              variables: operation.variables,
            });
          })
          .on('received', function (payload) {
            if (payload.result.data || payload.result.errors) {
              observer.next(payload.result);
            }

            if (!payload.more) {
              this.unsubscribe();
              observer.complete();
            }
          });

        return channel;
      }),
  );
}

module.exports = ActionCableLink;
