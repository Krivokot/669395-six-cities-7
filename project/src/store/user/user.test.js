import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({ authorizationStatus: AuthorizationStatus.UNKNOWN, authInfo: {} });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = { authorizationStatus: AuthorizationStatus.NO_AUTH };
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({ authorizationStatus: AuthorizationStatus.AUTH });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = { authorizationStatus: AuthorizationStatus.NO_AUTH };
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({ authorizationStatus: AuthorizationStatus.NO_AUTH });
  });

  it('should update authInfo to object with user info', () => {
    const state = { authInfo: {} };
    const loadUserInfo = {
      type: ActionType.LOAD_USER_INFO,
      payload: { user: 'userName' },
    };

    expect(user(state, loadUserInfo))
      .toEqual({ authInfo: { user: 'userName' } });
  });

  it('should update authInfo and authorizationStatus to empty object and NO_AUTH', () => {
    const state = { authInfo: { user: 'userName' }, authorizationStatus: AuthorizationStatus.AUTH };
    const logout = {
      type: ActionType.LOGOUT,
      payload: { authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {} },
    };

    expect(user(state, logout))
      .toEqual({ authorizationStatus: AuthorizationStatus.NO_AUTH, authInfo: {} });
  });

});
