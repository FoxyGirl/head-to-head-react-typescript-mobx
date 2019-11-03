import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import ViewStore from '../stores/ViewStore';
import { logout } from '../utils/firebase';

interface NavBarProps {
  viewStore: ViewStore;
}

const NavBar = (props: NavBarProps) => {
  const { authed } = props.viewStore;
  console.log('NavBar authed = ', authed);

  return (
    <nav className="navbar navbar-dark navbar-inverse navbar-expand-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Head To Head
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-controls="bs-example-navbar-collapse-1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse "
          id="bs-example-navbar-collapse-1"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!authed ? (
                <Link to="/login" className="nav-link">
                  Sign in
                </Link>
              ) : (
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                  className="nav-link"
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
