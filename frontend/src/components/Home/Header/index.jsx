import React from 'react';
import './style.scss';

export const HomeHeader = ({ clientsCount }) => {
  return (
    <header className='home-header'>
      <h1 className='fs-16 fs-lg-20 fs-xl-36'>Welcome to Bank Of Zavala</h1>
      <p>Currently serving {clientsCount} customers</p>
    </header>
  );
};
