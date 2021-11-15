import React from 'react';
import { AppHeader } from '../app-header/app-header';
import RundomList from '../rundom-list/rundom-list';

const MainPage = () => {
  //
  return (
    <>
      <AppHeader visible={'isVisible'} />
      <RundomList />
    </>
  );
};

export default MainPage;
