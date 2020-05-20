import React from 'react';

import Form from '../Form/Form';
import Title from '../Title/Title';
import StepIndicator from '../StepIndicator/StepIndicator';
import './App.scss';

export const App = () => {
  return (
    <div className='app' >
      <Title size='big'>Your first project</Title>
      <div className="step-indicator-wrapper">
        <StepIndicator size={3} activeStep={3} />
      </div>
      <Form noValidate />
    </div>
  );
}

