import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import "./styles/CartItem.css";

function CartItem(props){

    const handleAdd = () => {
        let cartValue = props.item;
        cartValue.qty = cartValue.qty + 1;
        props.handleAddQuantity(props.cartId,cartValue)
    }

    const handleSub = (cartId) => {
        let cartValue = props.item;
        cartValue.qty = cartValue.qty - 1;
        if(cartValue.qty > 0){
            props.handleSubtractQuantity(props.cartId,cartValue);
        }
        else{
            props.handleRemove(cartId);
        }
        
    }

    const handleDelete = (cartId) => {
        props.handleRemove(cartId);
    }



    return(
        <div className="item">
            <img src={props.item.img} alt={props.item.name} />
            <div className="item-desc">
                <span className="title">{props.item.name}</span>
                <p><b>Price: {props.item.price}</b></p> 
                <p>
                    <b>Quantity: {props.item.qty}</b> 
                </p>
                <div className="add-remove">
                    <FontAwesomeIcon className="faIcon" 
                        icon={faPlusCircle} 
                        style = {{color:"green"}}
                        size="3x"
                        onClick={()=>{handleAdd()}}
                    />
                    <FontAwesomeIcon className="faIcon" 
                        icon={faMinusCircle} 
                        style = {{color:"red"}}
                        size="3x"
                        onClick={()=>{handleSub(props.cartId)}}
                    />
                </div>
                <button className="btn" onClick={()=>{handleDelete(props.cartId)}}>Remove</button>
            </div>

        </div>
    )
}
export default CartItem;
