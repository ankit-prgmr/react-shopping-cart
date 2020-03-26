import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import "./styles/spinner.css";


function Spinner(){
    return (
        <div className="loader-center">
            <FontAwesomeIcon className="fa-spin fa-icon" 
                        icon={faCog} 
                        size="5x"
            />
        </div>
    )
}

export default Spinner;