import React, { useState } from 'react';
import { RegisterBox } from '../../components/Register';

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className='row'>
      <div className='col'>
        <RegisterBox error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};
