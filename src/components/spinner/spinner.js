import React from 'react';
import { ClipLoader } from 'react-spinners';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className='dish__spinner'>
      <ClipLoader />
    </div>
  );
};

export default Spinner;
