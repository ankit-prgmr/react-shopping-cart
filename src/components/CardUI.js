import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card-style.css";

function CardUI(props){
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
                <a href='#' className='btn btn-outline-success'>
                    Add to Cart
                </a>
            </div>
        </div>
        
    );
}

export default CardUI;