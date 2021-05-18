import React from "react";
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import CartSummaryModalProduct from './CartSummaryModalProduct';

const CartSummaryModal = props => {
    
    const cart = useSelector((state) => state.cart);

    return (
      <>

        <Modal
          size="xl"
          show={props.lgShow}
          onHide={() => props.setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {cart.length} item(s)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <li>{cart.map(cartItem => (
                  <CartSummaryModalProduct key={cartItem.id} productDetail={cartItem}/> 
                ))}</li>
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
  
  export default React.memo(CartSummaryModal);