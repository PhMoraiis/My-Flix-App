import React from 'react';

import { Header } from '../../components/Header';
import { PopularMovies } from '../../components/PopularMovies';

const Home: React.FC = () => {

  return (<div className='bg-[#1a1b26]'>
    <Header />
    {/* <Banner /> */}
    {/* <Filters /> */}
    {/* <ReleaseMovies /> */}
    <PopularMovies />
    {/* <.../> */}
  </div>
  );
};

export default Home;
