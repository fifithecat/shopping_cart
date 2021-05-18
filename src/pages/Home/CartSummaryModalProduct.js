import React, { useRef, useContext } from "react";
import { useDispatch } from 'react-redux';
import CallbackContext from '../../store/callback-context';
import { counterActions } from '../../store/index';

const CartSummaryModalProduct = props => {

    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const {updateQtyCallback, setUpdateQtyCallback} = useContext(CallbackContext);
    const changeQuantity = () => {

        console.log(props.productDetail.id + " - " + inputRef.current.value);
        let paylord = {id: props.productDetail.id, 
            title: props.productDetail.title,
            price: props.productDetail.price,
            qty: inputRef.current.value,
            //updateQty: props.productDetail.updateQty
            };

            //if ()   {
            const setQty = updateQtyCallback.[`_${props.productDetail.id}`];
            //}   else    {

            //}
            setQty(inputRef.current.value);
            if (inputRef.current.value === 0)   {
                delete updateQtyCallback.[`_${props.productDetail.id}`];
            }
      dispatch(counterActions.addUpdateCartItem(paylord));
    };
    return (

        <ul>{props.productDetail.title}
        <input
            ref={inputRef}
            label="qty"
            id="qty"
            type="number"
            min="0"
            max="5"
            step="1"
            value={props.productDetail.qty}
            onChange={changeQuantity}
        />                
        
         {props.productDetail.subTotal.toFixed(2)}</ul>

    );
}

export default React.memo(CartSummaryModalProduct);