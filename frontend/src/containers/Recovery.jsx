import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Recovery = () => {
  const [error, setError] = useState(false);
  const [recovery, setRecovery] = useState(false);

  useEffect(() => {
    document.title = 'Recuperar Contraseña';
    window.scrollTo(0, 0);
  }, []);

  const initialValues = () => {
    return { email: '' };
  };

  const validationSchema = () => {
    return {
      email: Yup.string().email('Ingrese un correo válido').required('Por favor ingrese su correo'),
    };
  };

  const recover = async (url, data) => {
    await axios
      .post(url, data)
      .then((res) => {
        window.location.href = '/#/correo-enviado';
      })
      .catch((error) => {
        setError(true);
        setRecovery(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
      setRecovery(true);
      recover(`${envConfig.apiUrl}/auth/recover`, data);
    },
  });

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Recuperar contraseña</h1>
      <p className='login--txt'>Ingresa tu correo electrónico para recuperar tu contraseña</p>
      <form className='login__form' onSubmit={formik.handleSubmit}>
        <div className='login__form-field'>
          <label className='login__form-field--lbl' htmlFor='email'>
            Correo electrónico
          </label>
          <input
            className='login__form-field--input'
            id='email'
            name='email'
            type='email'
            placeholder='Ingresa tu correo electrónico'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span className='login__form-field--err'>{formik.errors.email}</span>
        </div>
        <button className='login__form--btn' id='send-btn' type='submit'>
          {recovery ? (
            <>
              <svg
                className='spinner'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='spinner--circle'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  stroke-width='4'></circle>
                <path
                  className='spinner--path'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
              Procesando...
            </>
          ) : (
            'Recuperar contraseña'
          )}
        </button>
        {error ? (
          <span className='login__form-field--err'>Parece que el correo no es correcto</span>
        ) : null}
        <p className='login__form--question'>
          Regresar a{' '}
          <Link className='login__form--question-btn' to='/inicia-sesion'>
            inicio de sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Recovery;
