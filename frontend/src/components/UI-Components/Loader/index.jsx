import React, { useState, useEffect } from 'react';
import { LoadingAnimation } from './LoadingAnimation';

export const Loader = () => {
  const [showLoading, setShowLoading] = useState(false);
  let timeout;

  useEffect(() => {
    // start the timeout to show message/animation
    timeout = setTimeout(() => {
      setShowLoading(true);
    }, 3000);

    return () => {
      // clear the timeout
      // memory cleanup
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <LoadingAnimation />
      {showLoading && (
        <p>
          If loading seems stuck or too long, refresh page and/or contact
          administrator
        </p>
      )}
    </>
  );
};
