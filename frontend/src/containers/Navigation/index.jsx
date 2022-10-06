import React from 'react';
import { NavigationHeader } from '../../components/Navigation/Header';
import { NavigationMain } from '../../components/Navigation/Main';

export const Navigation = () => {
  const user = {
    name: 'johndoe',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  };
  return (
    <div className='row'>
      <div className='col'>
        <section className='module navigation'>
          <NavigationHeader user={user} />
          <NavigationMain />
        </section>
      </div>
    </div>
  );
};
