import { viewSettings } from './view-settings';
import { changeCity, sortOffers } from '../action';
import cities from '../../cities';
import { SortTypes } from '../../const';

describe('Reducer: viewSettings', () => {
  it('without additional parameters should return initial state', () => {
    expect(viewSettings(undefined, {}))
      .toEqual({ activeCity: cities[0], sortType: SortTypes.POPULAR });
  });

  it('should change city by a given value', () => {
    const state = { activeCity: cities[1] };

    expect(viewSettings(state, changeCity(cities[2])))
      .toEqual({ activeCity: cities[2] });
  });

  it('should change sort type by a given value', () => {
    const state = { sortType: SortTypes.POPULAR };

    expect(viewSettings(state, sortOffers(SortTypes.LOW_PRICE)))
      .toEqual({ sortType: SortTypes.LOW_PRICE });
  });
});
