import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import './app-header.scss';

export const AppHeader = ({ visible }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className='header'>
      <Link className='header__link' to='/'>
        Random dish
      </Link>
      <Link className='header__link' to='/favourites'>
        Favourites
      </Link>
      <div className={visible}>
        <button className='header__button' onClick={() => setModalActive(true)}>
          Add custom dish
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
  );
};
