import React from 'react';

export const HomeFeatures = () => {
  return (
    <section className='home-features'>
      <div className='home-image'>
        <img
          src='https://placehold.it/400x300'
          className='img-responsive'
          alt='placeholder'
        />
      </div>
      <section className='home-text'>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </section>
      <div className='home-cta'>
        <button className='btn btn-primary'>Learn More</button>
      </div>
    </section>
  );
};

// className='col-12 col-md-6 col-lg-4 col-xl-3'
