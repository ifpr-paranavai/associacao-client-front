import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomToast = ({ show, onClose, variant, message }) => {
  return (
    <Alert show={show} variant={variant} onClose={onClose} dismissible>
      {message}
    </Alert>
  );
};

export default CustomToast;
