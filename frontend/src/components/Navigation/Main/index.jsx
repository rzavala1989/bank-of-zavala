import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './style.scss';

export const NavigationMain = () => {
  let navClassNames = classnames({
    'main-nav': true,
  });
  return (
    <nav className={navClassNames}>
      <ul>
        <li>
          <NavLink to='/' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-home' />
              </div>
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink to='/accounts' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-clipboard' />
              </div>
              <span>Accounts</span>
            </div>
          </NavLink>
          <NavLink to='/transfers' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-arrow' />
              </div>
              <span>Transfers</span>
            </div>
          </NavLink>
          <NavLink to='/card' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-card' />
              </div>
              <span>Cards</span>
            </div>
          </NavLink>
          <NavLink to='/messages' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-chatbox-working' />
              </div>
              <span>Messages</span>
            </div>
          </NavLink>
          <NavLink to='/profile' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-person' />
              </div>
              <span>Profile</span>
            </div>
          </NavLink>
          <NavLink to='/help' exact={true}>
            <div className='main-nav-widget'>
              <div className='main-nav-box'>
                <i className='ion-help' />
              </div>
              <span>Help</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
