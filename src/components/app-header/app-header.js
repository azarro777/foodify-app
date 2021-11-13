import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../modal/modal';
import './app-header.scss';

export const AppHeader = ({ visible }) => {
  const [modalActive, setModalActive] = useState(false);

  const randomStyle =
    useLocation().pathname === '/foodify-app' ? '#68d4b0' : null;
  const favStyle =
    useLocation().pathname === '/foodify-app/favourites' ? '#68d4b0' : null;

  return (
    <header className='header'>
      <Link
        style={{ color: randomStyle }}
        className='header__link'
        to='/foodify-app'
      >
        Random dish
      </Link>
      <Link
        style={{ color: favStyle }}
        className='header__link'
        to='/foodify-app/favourites'
      >
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
