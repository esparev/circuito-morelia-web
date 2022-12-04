import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const Signup = () => {
  useEffect(() => {
    document.title = 'Crear Cuenta';
    window.scrollTo(0, 0);
  }, []);

  const initialValues = () => {
    return { slug: '', name: '', email: '', password: '', role: 'client' };
  };

  const validationSchema = () => {
    return {
      name: Yup.string().required('Por favor ingrese su nombre'),
      email: Yup.string().email('Ingrese un correo válido').required('Por favor ingrese su correo'),
      password: Yup.string().required('Por favor ingrese su contraseña'),
    };
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

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      const regex = /\s+/g;
      data.slug = slugify(data.name.replace(regex, '-'), { lower: true });
      signup(`${envConfig.apiUrl}/users`, data);
    },
  });

  return (
    <div className='login'>
      <figure className='login__figure'>
        <img className='login__figure--img' src={CircuitoMorelia} alt='' />
      </figure>
      <h1 className='login--title'>Crear cuenta</h1>
      <p className='login--txt'>Crea una cuenta y conoce el circuito</p>
      <form className='login__form' onSubmit={formik.handleSubmit}>
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
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <span id='name-err' className='login__form-field--err'>
            {formik.errors.name}
          </span>
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
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span id='email-err' className='login__form-field--err'>
            {formik.errors.email}
          </span>
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
          <span id='password-err' className='login__form-field--err'>
            {formik.errors.password}
          </span>
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
