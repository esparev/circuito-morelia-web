import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Recovery = () => {
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
        if (error) {
          //! const wrong
        }
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
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
          Recuperar contraseña
        </button>
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
