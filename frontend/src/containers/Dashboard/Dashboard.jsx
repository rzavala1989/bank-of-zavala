import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Navigation } from '../Navigation';
import { Accounts } from '../Accounts';
import { Transfers } from '../Transfers';
import { Cards } from '../Cards';
import { Profile } from '../Profile';
import { ProfileChangeDetails } from '../Profile/ChangeDetails';
import { Messages } from '../Messages';
import { Loader } from '../../components/UI-Components/Loader';
import { Help } from '../../components/Help';

export const Dashboard = () => {
  const [data, setData] = useState(true);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        {/*TODO: Intro <Route exact path /> */}
        <Route path='/' element={<Navigation />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/transfers' element={<Transfers />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/change-details' element={<ProfileChangeDetails />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/help' element={<Help />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
