import React from 'react';
import 'animate.css';
import '@styles/Alert.css';

const SuccessAlert = (props) => {
  const { successMessage } = props;
  return (
    <div className='alert__container alert--green animate__animated animate__slideInDown animate__fast'>
      <p>{successMessage}</p>
    </div>
  );
};

export default SuccessAlert;
