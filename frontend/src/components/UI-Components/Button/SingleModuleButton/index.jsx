import React from 'react';
import { Link } from 'react-router-dom';

import '../style.scss';
import './style.scss';

const SingleModuleButton = ({ href, btnType, text }) => {
  return (
    <div className='single-module-btn'>
      {href ? (
        <Link to={href} className='btn btn-primary'>
          {text}
        </Link>
      ) : (
        <button className='btn btn-primary' type={btnType}>
          {text}
        </button>
      )}
    </div>
  );
};

export default SingleModuleButton;
