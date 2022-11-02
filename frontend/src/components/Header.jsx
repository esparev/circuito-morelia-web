import React, { useState, useEffect } from 'react';
import LogoutButton from '@components/LogoutButton';
import LogoCircuito from '@img/Circuito_Morelia_Logo.png';
import '@styles/Header.css';

const Header = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    const menu = document.querySelector('#menu');
    setActive(!isActive);
    menu.classList.toggle('menu--visibility');
  };

  useEffect(() => {
    if (screen.width < 768) {
      menu.classList.toggle('menu--visibility');
    }
  }, []);

  return (
    <header className='header'>
      <div className='header__buttons'>
        <figure className='header__figure'>
          <a href='./index.html'>
            <img
              className='header__figure--img'
              src={LogoCircuito}
              alt='Logo Circuito Morelia'
            />
          </a>
        </figure>

        <div className='header__mobile-btn'>
          <button
            className='header__hamburger'
            type='button'
            aria-label='Toggle menu'
            id='nav-toggle'
          >
            <svg
              className={
                isActive
                  ? 'header__hamburger--btn ham hamRotate ham1 active'
                  : 'header__hamburger--btn ham hamRotate ham1'
              }
              viewBox='0 0 100 100'
              onClick={handleToggle}
            >
              <path
                className='line top'
                d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
              />
              <path className='line middle' d='m 30,50 h 40' />
              <path
                className='line bottom'
                d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
              />
            </svg>
          </button>
        </div>
      </div>

      <ul className='menu' id='menu'>
        <li className='menu__item'>
          <a href=''>Paradas</a>
        </li>
        <li className='menu__item'>
          <a href=''>Unidades</a>
        </li>
        <li className='menu__item'>
          <a href=''>Conductores</a>
        </li>
        <li className='menu__item'>
          <a href=''>Perfil</a>
        </li>
        <li className='menu__item'>
          <a className='menu__logout--svg' href='' title='Cerrar sesión'>
            <svg
              className='icon--24 icon--gray'
              width='72'
              height='72'
              viewBox='0 0 72 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M45 9H17C15.8954 9 15 9.89543 15 11V61C15 62.1046 15.8954 63 17 63H45'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M57 36L45 24M57 36L45 48M57 36H27'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <LogoutButton />
        </li>
      </ul>
    </header>
  );
};

export default Header;
