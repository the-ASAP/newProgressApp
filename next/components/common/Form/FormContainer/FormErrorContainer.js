import React, { useEffect } from 'react';

export const FormErrorContainer = ({ setErrors, serverErrors, children }) => {
  useEffect(() => {
    if (serverErrors) {
      setErrors(serverErrors);
    }
    // or use setStatus!!!
    // setErrors(serverErrors);
  }, [serverErrors]);

  return children;
};
