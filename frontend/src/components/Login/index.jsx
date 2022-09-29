import React from 'react';
import { FormBox } from '../UI-Components/FormBox';

export const LoginBox = ({ error, isLoading }) => {
  return (
    <FormBox>
      {error && <div className='alert alert-danger'>{error}</div>}
      {isLoading && <div className='alert alert-info'>Loading...</div>}
      TODO: Login
    </FormBox>
  );
};
