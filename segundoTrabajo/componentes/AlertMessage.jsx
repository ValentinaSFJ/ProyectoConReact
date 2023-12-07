import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({ variant, text, duration, link }) => {

  return (
    <Alert variant={variant}>
      {text}
    </Alert>
  );
};

export default AlertMessage;
