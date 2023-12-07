import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ loading, onClick, children }) => {
  return (
    <Button variant="primary" onClick={onClick} disabled={loading}>
      {loading ? 'Cargando...' : children}
    </Button>
  );
};

export default CustomButton;
