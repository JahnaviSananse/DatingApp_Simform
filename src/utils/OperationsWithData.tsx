import {getCountryCallingCode} from 'react-phone-number-input/input';

export const filteredCountriesArray = (
  COUNTRIES: {
    data: [];
    title: string;
  }[],
) => {
  const DATA = [];
  COUNTRIES.forEach((country: string) => {
    const id = DATA.findIndex((item) => item.title === country[0]);
    if (id > -1) {
      DATA[id].data.push({
        label: country,
        value: `+${getCountryCallingCode(country)}`,
      });
    } else {
      DATA.push({
        data: [{label: country, value: `+${getCountryCallingCode(country)}`}],
        title: country[0],
      });
    }
  });

  return DATA;
};

export const filteredFlatCountriesArray = (
  COUNTRIES: {
    data: [];
    title: string;
  }[],
) => {
  let DATA = [];
  DATA = COUNTRIES.map((item) => ({
    label: item,
    value: `+${getCountryCallingCode(item)}`,
  }));
  return DATA;
};
