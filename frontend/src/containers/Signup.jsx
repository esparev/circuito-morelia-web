import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Signup = () => {
  useEffect(() => {
    document.title = 'Crear Cuenta';
    window.scrollTo(0, 0);
  }, []);

  const [form, setValues] = useState({
    slug: '',
    name: '',
    email: '',
    password: '',
    role: 'client',
  });

  const handleInput = (event) => {
    validateForm();
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const signup = async (url, data) => {
    await axios
      .post(url, data)
      .then((res) => {
        window.location.href = '/inicia-sesion';
      })
      .catch((error) => {
        if (error) {
          //! const wrongSignup
        }
      });
  };

  const validateForm = () => {
    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const nameFieldErr = document.querySelector('#name-err');
    const emailFieldErr = document.querySelector('#email-err');
    const passwordFieldErr = document.querySelector('#password-err');

    if (nameField.value === '') {
      nameFieldErr.classList.add('login__form-field--err');
      nameFieldErr.classList.remove('login__form-field--success');
      nameFieldErr.innerText = 'Es obligatorio que ingrese su nombre';
    } else {
      nameFieldErr.classList.add('login__form-field--success');
      nameFieldErr.classList.remove('login__form-field--err');
      nameFieldErr.innerText = '¡Correcto!';
    }

    if (emailField.value === '') {
      emailFieldErr.classList.add('login__form-field--err');
      emailFieldErr.classList.remove('login__form-field--success');
      emailFieldErr.innerText = 'Es obligatorio que ingrese su correo';
    } else if (emailField.value.match(validEmailRegex) === null) {
      emailFieldErr.classList.add('login__form-field--err');
      emailFieldErr.classList.remove('login__form-field--success');
      emailFieldErr.innerText = 'Ingrese un correo válido';
    } else {
      emailFieldErr.classList.add('login__form-field--success');
      emailFieldErr.classList.remove('login__form-field--err');
      emailFieldErr.innerText = '¡Correcto!';
    }

    if (passwordField.value === '') {
      passwordFieldErr.classList.add('login__form-field--err');
      passwordFieldErr.classList.remove('login__form-field--success');
      passwordFieldErr.innerText = 'Es obligatorio que ingrese su contraseña';
    } else {
      passwordFieldErr.classList.add('login__form-field--success');
      passwordFieldErr.classList.remove('login__form-field--err');
      passwordFieldErr.innerText = '¡Correcto!';
    }

    if (emailField.value !== '' && passwordField.value !== '') {
      // sendMessage(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /\s+/g;
    form.slug = slugify(form.name.replace(regex, '-'), { lower: true });
    signup(`${envConfig.apiUrl}/users`, form, authConfig);
  };

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Crear cuenta</h1>
      <p className='login--txt'>Crea una cuenta y conoce el circuito</p>
      <form className='login__form' onSubmit={handleSubmit}>
        <div className='login__form-field'>
          <label className='login__form-field--lbl' htmlFor='name'>
            Nombre
          </label>
          <input
            className='login__form-field--input'
            id='name'
            name='name'
            type='name'
            placeholder='Ingresa tu nombre completo'
            onChange={handleInput}
            required
          />
          <span id='name-err' className='login__form-field--err'></span>
        </div>
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
        <button className='login__form--btn' id='send-btn' type='submit'>
          Crear cuenta
        </button>
        <p className='login__form--question'>
          ¿Ya tienes una cuenta?{' '}
          <Link className='login__form--question-btn' to='/inicia-sesion'>
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
