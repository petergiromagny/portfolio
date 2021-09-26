import React, { useEffect } from 'react';
import type { NextPage } from 'next';
// Import layouts
import Header from 'components/layouts/Header';
import Body from 'components/layouts/Body';
import Navbar from 'components/layouts/Navbar';

const Home: NextPage = () => {
  return (
    <div className='page__container'>
      <Header />
      <Body>
        <Navbar />
      </Body>
    </div>
  );
};

export default Home;
