import React from 'react';
import 'animate.css';
import '@styles/Alert.css';

const ErrorAlert = (props) => {
  const { errorMessage } = props;
  return (
    <div className='alert__container alert--red animate__animated animate__slideInDown animate__fast'>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorAlert;
