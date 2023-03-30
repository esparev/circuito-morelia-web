import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Login = () => {
  const [error, setError] = useState(false);
  const [logging, setLogging] = useState(false);

  useEffect(() => {
    document.title = 'Iniciar Sesión';
    window.scrollTo(0, 0);
  }, []);

  const initialValues = () => {
    return { email: '', password: '' };
  };

  const validationSchema = () => {
    return {
      email: Yup.string().email('Ingrese un correo válido').required('Por favor ingrese su correo'),
      password: Yup.string().required('Por favor ingrese su contraseña'),
    };
  };

  const login = async (url, data) => {
    await axios
      .post(url, data)
      .then((res) => {
        const user = res.data.user;

        localStorage.setItem('id', user.id);
        localStorage.setItem('name', user.name);
        localStorage.setItem('slug', user.slug);
        localStorage.setItem('email', user.email);
        localStorage.setItem('image', user.image);
        localStorage.setItem('role', user.role);
        localStorage.setItem('token', res.data.token);

        window.location.href = '/';
      })
      .catch((error) => {
        setError(true);
        setLogging(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
      setLogging(true);
      login(`${envConfig.apiUrl}/auth/login`, data);
    },
  });

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Inicia sesión</h1>
      <p className='login--txt'>Inicia sesión para explorar la ruta</p>
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
        <div className='login__form-field'>
          <label className='login__form-field--lbl' htmlFor='password'>
            Contraseña
          </label>
          <input
            className='login__form-field--input'
            id='password'
            name='password'
            type='password'
            placeholder='Ingresa tu contraseña'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span className='login__form-field--err'>{formik.errors.password}</span>
        </div>
        <Link className='login__form--forgot' to='/recuperar-contraseña'>
          ¿Olvidaste tu contraseña?
        </Link>
        <button className='login__form--btn' id='send-btn' type='submit'>
          {logging ? (
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
            'Iniciar sesión'
          )}
        </button>
        {error ? (
          <span className='login__form-field--err'>El correo o la contraseña son incorrectos</span>
        ) : null}
        <p className='login__form--question'>
          ¿No tienes una cuenta?{' '}
          <Link className='login__form--question-btn' to='/crear-cuenta'>
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
