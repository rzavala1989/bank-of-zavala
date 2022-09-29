import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

export const FormBox = () => {
  return (
    <section className='module form-module'>
      <section>
        <div>
          <FontAwesomeIcon icon={faSignIn} />
        </div>
      </section>
    </section>
  );
};
