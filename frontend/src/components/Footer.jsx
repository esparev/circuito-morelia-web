import React from 'react';
import { Link } from 'react-router-dom';
import LogoCircuito from '@img/Circuito_Morelia_Logo.png';
import '@styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <figure className='footer__figure'>
        <Link to='/'>
          <img className='footer__figure--img' src={LogoCircuito} alt='Logo Circuito Morelia' />
        </Link>
      </figure>

      <div className='footer__info'>
        <p className='footer__info--txt'>
          © Copyright 2022 Circuito Morelia. Todos los derechos reservados.
        </p>
        <p className='footer__info--txt'>
          Desarrollo y mantenimiento por <b>Integra</b>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
