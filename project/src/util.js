import {Cities, SortTypes} from './const';

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

export const sortObjects = (type, items) => {
  switch (type) {
    case SortTypes.LOW_PRICE:
      return items.sort((a,b) => a.price - b.price);
    case SortTypes.HIGH_PRICE:
      return items.sort((a,b) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return items.sort((a,b) => b.rating - a.rating);
    default: //FIXME не работает popular
      break;
  }
};
