import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import useGetUsers from '@hooks/useGetUsers';
import axios from 'axios';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Modal.css';

const AssignDriverModal = (props) => {
  const { unitId } = props;
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter((driver) => driver.role === 'driver');
  const [form, setValues] = useState({
    unitId: 0,
    driverId: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const assignDriver = async (url, data, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .post(url, data, config)
      .then((res) => {
        root.render(<SuccessAlert successMessage={'¡Conductor asignado exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 500);
        }, 5000);
      })
      .catch((error) => {
        root.render(<ErrorAlert errorMessage={'¡Ups!, Hubo un error al asignar al conductor.'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 500);
        }, 5000);
      });
  };

  const hideModal = () => {
    const modal = document.querySelector('.assign__modal');
    modal.classList.remove('modal--show');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    form.unitId = unitId;
    console.log(form);
    assignDriver(`${envConfig.apiUrl}/units/add-driver`, form, authConfig);
    hideModal();
  };

  return (
    <div className='assign__modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Asignar Conductor</h2>
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
        <form className='modal__form' onSubmit={handleSubmit}>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='driverId'>
              Asignar un conductor a la unidad
            </label>
            <select
              className='modal__form-field--input'
              name='driverId'
              id='driver'
              onChange={handleInput}>
              <option className='modal__form-field--option' defaultValue=''>
                Escoja un conductor
              </option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>
          <button className='crud-button crud-button--black' type='submit'>
            Asignar Conductor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignDriverModal;
