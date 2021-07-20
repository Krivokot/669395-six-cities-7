import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute} from '../../const';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteSession, loadAuthInfo} from '../../store/api-actions';
import {getAuthStatus, getUserInfo} from '../../store/user/selectors';

function Header(props) {

  const {authInfo, fetchUserInfo, authorizationStatus, onClickSignOut} = props;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.MAIN}>
                <>
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
                </>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.FAVORITES}>
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <a className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img src={authInfo.avatar_url} alt='User'/>
                        </div>
                        <span className="header__user-name user__name">{authInfo.email}</span>
                      </a> : ''}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.SIGN_IN}>
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <a className="header__nav-link" href="img/logo.svg" onClick={() => onClickSignOut()}>
                        <span className="header__signout">Sign out</span>
                      </a> :
                      <a className="header__nav-link" href="img/logo.svg">
                        <span className="header__signout">Sign in</span>
                      </a>}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onClickSignOut: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  authInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickSignOut() {
    dispatch(deleteSession());
  },
  fetchUserInfo() {
    dispatch(loadAuthInfo());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
