import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useAuth0 } from '@auth0/auth0-react';
import LoadingIndicator from '../../UI/LoadingIndicator';

const LoginModal = props => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithPopup,
    loginWithRedirect,
    logout, 
    getAccessTokenSilently
  } = useAuth0();

  if (isLoading) {
    return <LoadingIndicator/>;
  } else return (
    
    <Modal
      show={!isAuthenticated}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      >
      <Modal.Header closeButton>
        <Modal.Title>Fifi Grocery store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome to Fifi Grocery store, Please Login to continue!
      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary" onClick={loginWithRedirect}>Login</Button>
      </Modal.Footer>
    </Modal>
       
  );
}

export default LoginModal;