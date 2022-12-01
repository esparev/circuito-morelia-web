import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Login = () => {
  useEffect(() => {
    document.title = 'Iniciar Sesión';
    window.scrollTo(0, 0);
  }, []);

  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    validateForm();
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
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
        window.location.href = '/';
      })
      .catch((error) => {
        if (error) {
          //! const wrongLogin
        }
      });
  };

  const validateForm = () => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const emailFieldErr = document.querySelector('#email-err');
    const passwordFieldErr = document.querySelector('#password-err');

    if (emailField.value === '') {
      emailFieldErr.classList.add('login__form-field--err');
      emailFieldErr.classList.remove('login__form-field--success');
      emailFieldErr.innerText = 'Es obligatorio que ingrese su correo';
    } else if (emailField.value.match(validEmailRegex) === null) {
      emailFieldErr.classList.add('login__form-field--err');
      emailFieldErr.classList.remove('login__form-field--success');
      emailFieldErr.innerText = 'Ingrese un correo válido';
    } else {
      emailFieldErr.classList.remove('login__form-field--err');
      emailFieldErr.innerText = '';
    }

    if (passwordField.value === '') {
      passwordFieldErr.classList.add('login__form-field--err');
      passwordFieldErr.classList.remove('login__form-field--success');
      passwordFieldErr.innerText = 'Es obligatorio que ingrese su contraseña';
    } else {
      passwordFieldErr.classList.remove('login__form-field--err');
      passwordFieldErr.innerText = '';
    }

    // if (emailField.value !== '' && passwordField.value !== '') {
    //   handleSubmit(event);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(`${envConfig.apiUrl}/auth/iniciar-sesion`, form);
  };

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Inicia sesión</h1>
      <p className='login--txt'>Inicia sesión para explorar la ruta</p>
      <form className='login__form' onSubmit={handleSubmit}>
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
            onChange={handleInput}
            required
          />
          <span id='email-err' className='login__form-field--err'></span>
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
            onChange={handleInput}
            required
          />
          <span id='password-err' className='login__form-field--err'></span>
        </div>
        <a className='login__form--forgot' href=''>
          ¿Olvidaste tu contraseña?
        </a>
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
