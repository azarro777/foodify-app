import React from 'react';
import MainPage from '../pages/main-page';
import FavouritesPage from '../pages/favourites-page';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route exaxt path='/' element={<MainPage />} />
        <Route path='favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
