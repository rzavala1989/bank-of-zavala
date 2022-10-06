import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const NavigationHeader = ({ user }) => {
  return (
    <header className='navigation-header'>
      <section className='user-profile-box'>
        <Link to='/dashboard/profile'>
          <img src={user.avatar} alt='Profile pic' />
          <span>{user.name}</span>
        </Link>
      </section>
      <ul className='navigation-header-links'>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </header>
  );
};
