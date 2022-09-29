import React, { useState } from 'react';
import { HomeFeatures } from '../../components/Home/Features';
import { HomeHeader } from '../../components/Home/Header';
import { HomeNewFeatures } from '../../components/Home/NewFeatures';
import './styles.scss';

//Loader
//Header
//TODO

export const Home = (props) => {
  const [clientsCount, setClientsCount] = useState(0);

  return (
    <div className='row'>
      <div className='col'>
        <section className='module home border border-primary'>
          <HomeHeader clientsCount={clientsCount} />
          <HomeNewFeatures />
          <HomeFeatures />
        </section>
      </div>
    </div>
  );
};
