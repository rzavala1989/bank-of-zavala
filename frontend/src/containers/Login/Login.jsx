import React, { useState } from 'react';
import { LoginBox } from '../../components/Login';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className='row'>
      <div className='col'>
        <LoginBox error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};
