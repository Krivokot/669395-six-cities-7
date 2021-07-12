export const filterObjects = (items, city) => {
  switch (city) {
    case 'Paris':
      items.filter((item) => offer.city.name === 'Paris');
      break;
    case 'Cologne':
      items.filter((item) => offer.city.name === 'Cologne');
      break;
    case 'Brussels':
      items.filter((item) => offer.city.name === 'Brussels');
      break;
    case 'Amsterdam':
      items.filter((item) => offer.city.name === 'Amsterdam');
      break;
    case 'Hamburg':
      items.filter((item) => offer.city.name === 'Hamburg');
      break;
    case 'Dusseldorf':
      items.filter((item) => offer.city.name === 'Dusseldorf');
      break;
  }

  return items;
}
