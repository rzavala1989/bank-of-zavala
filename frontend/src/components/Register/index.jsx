import React from 'react';
import { FormBox } from '../UI-Components/FormBox';
import { RegisterForm } from './Form';

export const RegisterBox = ({
  error,
  isLoading,
  onRegisterSubmit,
  history,
}) => {
  return (
    <FormBox>
      {error && <div className='alert alert-danger'>{error}</div>}
      {isLoading && <div className='alert alert-info'>Loading...</div>}
      {!isLoading && (
        <RegisterForm history={history} onRegisterSubmit={onRegisterSubmit} />
      )}
    </FormBox>
  );
};
