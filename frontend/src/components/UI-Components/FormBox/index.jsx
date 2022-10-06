import React from 'react';
import './style.scss';
import loginIcon from './login-icon.png';

export const FormBox = (props) => {
  return (
    <section className='module form-module'>
      <section className='login-icon'>
        <div className='icon-container'>
          <img src={loginIcon} alt='login icon' className='img-responsive' />
        </div>
      </section>
      {props.children}
    </section>
  );
};
