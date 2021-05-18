import React, { useRef, useState, useContext } from "react";
import { useDispatch } from 'react-redux';
import CallbackContext from '../../store/callback-context';
import { counterActions } from '../../store/index';

const Product = props => {

    const {updateQtyCallback, setUpdateQtyCallback} = useContext(CallbackContext);
    const dispatch = useDispatch();

    const [qty, setQty] = useState(0);
 
    props.productDetail.callback = setQty;

    const changeQuantity = (event) => {
        event.preventDefault();
        setQty(inputRef.current.value);

        setUpdateQtyCallback({...updateQtyCallback, [`_${props.productDetail.id}`]: setQty});

        console.log(props.productDetail.id + " - " + inputRef.current.value);
        let paylord = {id: props.productDetail.id, 
            title: props.productDetail.title,
            price: props.productDetail.price,
            qty: inputRef.current.value,
            //updateQty: setQty
            //(val)=> setQty(val)
            
            };

      dispatch(counterActions.addUpdateCartItem(paylord));
    };
  
    const inputRef = useRef(null);

    return (
        <React.Fragment>
            
            <form >
                <div 
                //onClick={props.onUpdateCart.bind(this, product.id, this.inputRef.current.value)}
                //onClick={focusTextInput.bind(this, 1)}
                >
                <img src={process.env.PUBLIC_URL + `/images/${props.productDetail.id}.jpg`} alt={`${props.productDetail.title} image`}></img>
                
                
                <div>{props.productDetail.title}</div>
                <div>{props.productDetail.price}</div>
                <div>{props.productDetail.text}</div>
                <input
                    ref={inputRef}
                    label="Amount"
                
                    type="number"
                    min="0"
                    max="5"
                    step="1"
                    value={qty}
                    onChange={
                        changeQuantity}
                />                                    
                </div>
            </form>
           
        </React.Fragment>
    );

}

export default React.memo(Product);