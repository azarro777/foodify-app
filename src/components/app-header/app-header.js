import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import './app-header.scss';

export const AppHeader = ({ visible }) => {
  const [modalActive, setModalActive] = useState(false);

  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split('/');

  return (
    <header className='header'>
      {/* <li className={splitLocation[1] === '' ? 'active' : ''}> */}
      <Link className='header__link' to='/'>
        Random dish
      </Link>
      {/* </li> */}
      {/* <li className={splitLocation[1] === 'favourites' ? 'active' : ''}> */}
      <Link className='header__link' to='/favourites'>
        Favourites
      </Link>
      {/* </li> */}
      <div className={visible}>
        <button className='header__button' onClick={() => setModalActive(true)}>
          Add custom dish
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
  );
};
