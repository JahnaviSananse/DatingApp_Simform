import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';

import {PublicAccountFull} from '../../store/generated/graphql';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  overlayLabelWrapper: {
    position: 'absolute',
  },
});

interface Props {
  cards: {data: PublicAccountFull; key: string}[];
  animationDuration: number;
  overlayLabels: {
    left: FunctionComponent | SVGSVGElement;
    right: FunctionComponent | SVGSVGElement;
  };
  renderCard: (
    card: {data: PublicAccountFull; key: string},
    overlay: FunctionComponent | SVGSVGElement | null,
    index: number,
  ) => FunctionComponent;
  onSwipe: (
    index: number,
    card: {data: PublicAccountFull},
    currentCard: {data: PublicAccountFull},
  ) => void;
  onFinished: () => void;
}

const Swiper: FunctionComponent<Props> = (
  {
    cards,
    animationDuration = 800,
    overlayLabels,
    renderCard,
    onSwipe,
    onFinished,
  },
  ref,
) => {
  const swipeAnim = useRef(new Animated.ValueXY());
  const isAnimRunning = useRef(false);
  const [overlay, setOverlay] = useState(null);
  const [localCards, setLocalCards] = useState([...cards]);

  useEffect(() => {
    setLocalCards([...cards]);
  }, [cards]);

  const swipe = useCallback(
    (direction, x, y) => {
      if (localCards.length && !isAnimRunning.current) {
        isAnimRunning.current = true;
        setOverlay(direction);

        Animated.timing(swipeAnim.current, {
          duration: animationDuration,
          toValue: {x, y},
          useNativeDriver: true,
        }).start(() => {
          swipeAnim.current.setValue({x: 0, y: 0});
          setOverlay(null);
          setLocalCards((value) => value.slice(1));

          const nextIndex = cards.length - localCards.length + 1;
          const currentCard = cards.length - localCards.length;
          if (nextIndex !== cards.length) {
            if (onSwipe) {
              onSwipe(nextIndex, cards[nextIndex], cards[currentCard]);
            }
          } else {
            if (onFinished) {
              onFinished();
            }
          }
          isAnimRunning.current = false;
        });
      }
    },
    [animationDuration, cards, localCards.length, onFinished, onSwipe],
  );

  const spin = swipeAnim.current.y.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1deg'],
  });

  useImperativeHandle(ref, () => {
    const window = Dimensions.get('window');

    return {
      reset: () => {
        setLocalCards([...cards]);
      },
      swipeLeft: () => {
        swipe('left', -window.width - 100, -20);
      },
      swipeRight: () => {
        swipe('right', window.width + 100, 20);
      },
    };
  });

  const renderCards = useMemo(
    () =>
      localCards.slice(0, 2).map((item, index) => (
        <Animated.View
          key={item.key}
          style={[
            styles.overlayLabelWrapper,
            {zIndex: index === 0 ? 1 : 0},
            {
              ...(index === 0
                ? {
                    transform: [
                      {translateX: swipeAnim.current.x},
                      {rotateZ: spin},
                    ],
                  }
                : {}),
            },
          ]}>
          {renderCard(
            item,
            index === 0
              ? overlay === 'left'
                ? overlayLabels.left
                : overlay === 'right'
                ? overlayLabels.right
                : null
              : null,
            index,
          )}
        </Animated.View>
      )),
    [
      localCards,
      overlay,
      overlayLabels.left,
      overlayLabels.right,
      renderCard,
      spin,
    ],
  );

  return <View style={styles.container}>{renderCards}</View>;
};

export default React.memo(React.forwardRef(Swiper));
