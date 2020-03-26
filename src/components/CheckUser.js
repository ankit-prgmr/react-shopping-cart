import React from "react";
import fire from "./config/fire";
import "./styles/check-user.css";

function CheckUser(props){

    const handleSignOut = (e) => {
        fire.auth().signOut().then(function() {
            alert("You're signed out");
          }).catch(function(error) {
            console.log(error);
          });
    }

    return(
        props.user ? (
            <div className="user-container">
                <h2>Welcome, {props.user.email}</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        ) : (
            null
        )
        
    )
}
export default CheckUser;