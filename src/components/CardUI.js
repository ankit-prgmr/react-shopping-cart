import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/card-style.css";
import { withRouter} from 'react-router-dom';
import UserContext from './UserContext';
import {database} from "./config/fire";

function CardUI(props){
    let userContext = useContext(UserContext);
    const {user, userData} = userContext;
    const routeChange=()=> {
        let path, cardInfo, userRef, newPostKey;
        if(user !== null){
            path = `/Cart`;
            cardInfo = {
                id:props.id,
                img: props.imgsrc,
                name: props.title,
                qty: 1,
                price: props.price
            }
            userRef = database.ref("users/" + userData.uid);
            
            userRef.child('cart').push().set(cardInfo).then(()=>{
                alert("Item added to cart successfully");
            }).catch(err => alert(err));

            // newPostKey = userRef.child("cart").push().key;
            // console.log(newPostKey);
            // var updates = {};
            // updates["/cart/" + newPostKey] = cardInfo;
            // userRef.update(updates).then(()=>{
            //         alert("Item added to cart successfully");
            // }).catch(err => alert(err));

            // userRef.child('cart/').child(cardInfo.id).set(cardInfo).then(()=>{
            //         alert("Item added to cart successfully");
            //     }).catch(err => alert(err));

        }
        else{
            path = `/MyAccount`;
            props.history.push(path);
        }
        
      }

    return(
        
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt={props.title} className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    {props.price}
                </p>
                <a className='btn btn-outline-success' onClick={routeChange}>
                    Add to Cart
                </a>
            </div>
        </div>
        
    );
}

export default withRouter(CardUI);