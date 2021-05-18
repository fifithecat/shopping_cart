import React, { useState } from "react";
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import CartSummaryModal from './CartSummaryModal';
import Greetings from './Greetings';

const Header = props => {

    const [lgShow, setLgShow] = useState(false);
    const cart = useSelector((state) => state.cart);
    const total = useSelector((state) => state.total);

    return (
      <div className={styles.['header']}>
        <div className={styles.['headerLeftDiv']}>{cart.length} item(s) in the&nbsp; 
        <a href="#" onClick={() => setLgShow(true)}>Cart</a>
        &nbsp;&nbsp;$ {total.toFixed(2)}</div>
        
        <Greetings></Greetings>
        <CartSummaryModal lgShow={lgShow} setLgShow={setLgShow}></CartSummaryModal>
        
      </div>
    );
  }
  
  export default React.memo(Header);