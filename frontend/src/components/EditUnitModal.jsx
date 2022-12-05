import React from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Modal.css';

const EditUnitModal = (props) => {
  const { number } = props;

  const initialValues = () => {
    return { number: '' };
  };

  const validationSchema = () => {
    return {
      number: Yup.number(),
    };
  };

  const hideModal = () => {
    const modal = document.querySelector('.edit__modal');
    modal.classList.remove('modal--show');
  };

  const editUnit = async (url, data, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .patch(url, data, config)
      .then((res) => {
        hideModal();
        root.render(<SuccessAlert successMessage={'¡Unidad editada exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
            window.location.href = `/#/${data.number}`;
          }, 100);
        }, 3000);
      })
      .catch((error) => {
        hideModal();
        root.render(<ErrorAlert errorMessage={'¡Ups!, Hubo un error al editar la unidad.'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 100);
        }, 3000);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      editUnit(`${envConfig.apiUrl}/units/${number}`, data, authConfig);
    },
  });

  return (
    <div className='edit__modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Editar Unidad</h2>
          <svg
            className='modal__button--close icon--24 icon--black'
            viewBox='0 0 72 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={hideModal}>
            <path
              d='M36 36L21 21M36 36L51 51M36 36L51 21M36 36L21 51'
              strokeWidth='7'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <form className='modal__form' onSubmit={formik.handleSubmit}>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='number'>
              Número de Unidad <span>(Del 1 al 1000)</span>
            </label>
            <input
              className='modal__form-field--input'
              id='number'
              name='number'
              type='number'
              placeholder='Ingresa el número de la unidad'
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </div>
          <button className='crud-button crud-button--black' type='submit'>
            Editar Unidad
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUnitModal;
