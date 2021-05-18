import React, { useState } from "react";
import styles from './Home.module.css';
import Product from './Product';
import Header from './Header';
import CallbackContext from '../../store/callback-context';
import LoginModal from './LoginModal';

const Home = props => {

  const [updateQtyCallback, setUpdateQtyCallback] = useState({});

  return (
    <React.Fragment>
    <CallbackContext.Provider
    value={{
      updateQtyCallback, setUpdateQtyCallback
    }}
    >
    
    <Header></Header>

    <div className={styles.['main-container']}>

      <div className={styles.['grid-container']}>
    
        {props.boxData.map(product => (        
              <Product key={product.id} productDetail={product}/>        
        ))}        
      </div>

    </div>
    </CallbackContext.Provider>
    <LoginModal></LoginModal>
    </React.Fragment>    
  );
}

export default Home;