import {React} from 'react';
import PropTypes from 'prop-types';
import OffersList from '../main/offers-list';
import Map from '../map/map';
import {CardTypes, SortTypes} from '../../const';
import {connect} from 'react-redux';
import {changeCity} from '../../store/action';
import Sort from '../sort/sort';
import {filterObjects} from '../../util';
import Header from '../header/header';
import {getOffers} from '../../store/offer-data/selectors';
import {getCity, getSortType} from '../../store/view-settings/selectors';
import MainEmpty from '../main-empty/main-empty';

//FIXME запоминает только последний эмэил
//FIXME падает на house among oilve
//TODO сделать рэйтинг
//TODO сортировка не исчезает при выборе

function Main(props) {
  const {offers, zoom, selectedPoint, onListItemHover, activeCity, cities, onChangeCity, sortType} = props;

  const filteredOffers = filterObjects(offers, activeCity.name);

  switch (sortType) {
    case SortTypes.LOW_PRICE:
      filteredOffers.sort((a,b) => a.price - b.price);
      break;
    case SortTypes.HIGH_PRICE:
      filteredOffers.sort((a,b) => b.price - a.price);
      break;
    case SortTypes.TOP_RATED:
      filteredOffers.sort((a,b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li className="locations__item">
                  <a
                    className={activeCity.name === city.name ? 'locations__item-link tabs__item--active' : 'locations__item-link tabs__item'}
                    onClick={() =>
                      onChangeCity(city)}
                  >
                    <span>{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {filteredOffers === null ? 
          <MainEmpty city={activeCity} /> :
          <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity.name}</b>
              <Sort />
              <OffersList
                offers = {filteredOffers}
                onListItemHover={onListItemHover}
                city={activeCity}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={activeCity}
                zoom={zoom}
                points={filteredOffers}
                selectedPoint={selectedPoint}
                cardType = {CardTypes.MAIN}
              />
            </div>
          </div>
        </div>
        }
      </main>
    </div>
  );
}

Main.propTypes = { //TODO proptypes перенести в функцию
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      goods: PropTypes.array,
      id: PropTypes.number.isRequired,
      image: PropTypes.array,
      isFavorite: PropTypes.bool,
      isPremium: PropTypes.bool.isRequired,
      maxAdults: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  zoom: PropTypes.number.isRequired,
  selectedPoint: PropTypes.object.isRequired,
  onListItemHover: PropTypes.func.isRequired,
  activeCity: PropTypes.object,
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  activeCity: getCity(state),
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
