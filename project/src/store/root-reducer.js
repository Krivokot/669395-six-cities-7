import {combineReducers} from 'redux';
import {viewSettings} from './view-settings/view-settings';
import {offerData} from './offer-data/offer-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  VIEW: 'VIEW',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.VIEW]: viewSettings,
  [NameSpace.USER]: user,
});