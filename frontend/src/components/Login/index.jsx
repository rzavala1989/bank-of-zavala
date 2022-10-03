import React from 'react';
import { FormBox } from '../UI-Components/FormBox';
import { LoginForm } from './Form';

export const LoginBox = ({ error, isLoading, onLoginSubmit, history }) => {
  return (
    <FormBox>
      {error && <div className='alert alert-danger'>{error}</div>}
      {isLoading && <div className='alert alert-info'>Loading...</div>}
      {!isLoading && (
        <LoginForm history={history} onLoginSubmit={onLoginSubmit} />
      )}
    </FormBox>
  );
};
