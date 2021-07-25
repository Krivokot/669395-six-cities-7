import {
  changeCity,
  sortOffers,
  ActionType
} from './action';


describe('Actions', () => {
  it('action creator for change city filter returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: '',
    };

    expect(changeCity('')).toEqual(expectedAction);
  });

  it('action creator for change sort returns correct action', () => {
    const expectedAction = {
      type: ActionType.SORT_OFFERS,
      payload: '',
    };

    expect(sortOffers('')).toEqual(expectedAction);
  });
});
