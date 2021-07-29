import {Cities} from './const';

export const filterObjects = (items, city) => {
  switch (city) {
    case Cities.PARIS:
      return items.filter((item) => item.city.name === Cities.PARIS);
    case Cities.COLOGNE:
      return items.filter((item) => item.city.name === Cities.COLOGNE);
    case Cities.BRUSSELS:
      return items.filter((item) => item.city.name === Cities.BRUSSELS);
    case Cities.AMSTERDAM:
      return items.filter((item) => item.city.name === Cities.AMSTERDAM);
    case Cities.HAMBURG:
      return items.filter((item) => item.city.name === Cities.HAMBURG);
    case Cities.DUSSELDORF:
      return items.filter((item) => item.city.name === Cities.DUSSELDORF);
    default:
      break;
  }
};
