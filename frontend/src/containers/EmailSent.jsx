import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const EmailSent = () => {
  useEffect(() => {
    document.title = 'Correo envíado';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Correo envíado</h1>
      <p className='login--txt'>Revisa la bandeja de tu correo para cambiar tu contraseña</p>
      <div className='login__form'>
        <Link className='login__form--btn' to='/inicia-sesion'>
          Regresar a inicio de sesión
        </Link>
      </div>
    </div>
  );
};

export default EmailSent;
