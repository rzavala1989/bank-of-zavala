import React from 'react';
import ReactLoading from 'react-loading';
import './style.scss';

export const LoadingAnimation = () => {
  return (
    <div className='loading-animation'>
      <ReactLoading
        color='#3c6cde'
        type='bars'
        height={100}
        width={100}
        delay={200}
      />
    </div>
  );
};
