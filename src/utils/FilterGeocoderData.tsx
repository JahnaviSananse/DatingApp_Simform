import {GeocoderProps} from '../interfaces/Map';

export const FilterGeocoderData = (GeocoderData: GeocoderProps) => {
  // console.log('GeocoderData', GeocoderData.plus_code.compound_code);
  const AdministrativeLabel1 = GeocoderData.results.find(
    (item) =>
      item.types[0] === 'administrative_area_level_1' ||
      item.types[1] === 'administrative_area_level_1',
  );
  const AdministrativeLabel2 = GeocoderData.results.find(
    (item) =>
      item.types[0] === 'administrative_area_level_2' ||
      item.types[1] === 'administrative_area_level_2',
  );
  const AdministrativeLabel3 = GeocoderData.results.find(
    (item) =>
      item.types[0] === 'administrative_area_level_3' ||
      item.types[1] === 'administrative_area_level_3',
  );
  const Locality = GeocoderData.results.find(
    (item) => item.types[0] === 'locality' || item.types[1] === 'locality',
  );
  const Neighborhood = GeocoderData.results.find(
    (item) =>
      item.types[0] === 'neighborhood' || item.types[1] === 'neighborhood',
  );
  const PostalCode = GeocoderData.results.find(
    (item) =>
      item.types[0] === 'postal_code' || item.types[1] === 'postal_code',
  );

  if (!Neighborhood && PostalCode) {
    const LocalityInPostalCode = PostalCode.address_components.find(
      (item) => item.types[0] === 'locality' || item.types[1] === 'locality',
    );
    const NeighborhoodInPostalCode = PostalCode.address_components.find(
      (item) =>
        item.types[0] === 'neighborhood' || item.types[1] === 'neighborhood',
    );

    return `${
      NeighborhoodInPostalCode
        ? NeighborhoodInPostalCode?.short_name
        : LocalityInPostalCode?.long_name
    }, ${
      AdministrativeLabel1
        ? AdministrativeLabel1.address_components[0].short_name
        : AdministrativeLabel2
        ? AdministrativeLabel2.address_components[0].short_name
        : AdministrativeLabel3
        ? AdministrativeLabel3.address_components[0].short_name
        : 'District is missing'
    }`;
  }
  if (Neighborhood) {
    return `${Neighborhood.address_components[0].long_name}, ${
      Locality
        ? Locality.address_components[1].short_name === 'NY'
          ? 'NYC'
          : Locality.address_components[1].short_name
        : AdministrativeLabel1?.address_components[0].short_name
    }`;
  }

  return 'Neighborhood is missing';
};
