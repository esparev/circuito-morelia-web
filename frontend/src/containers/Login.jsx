import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Login = () => {
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

        // navigate('/');
        window.location.href = '/#/';
      })
      .catch((error) => {
        if (error) {
          //! const wrongLogin
        }
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
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
          Iniciar sesión
        </button>
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
