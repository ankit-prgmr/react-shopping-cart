import React, {Component} from "react";
import fire from "./config/fire";

class MyAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    signUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
    
      login = (e) => {
        e.preventDefault();  
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }

    render(){
        return(
            <form>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <div>Email</div>
                        <input id="email" placeholder="Enter Email.." 
                        type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <div>Password</div>
                        <input id="password" placeholder="Enter Password.." 
                        type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <button style={{margin: '10px'}} onClick={this.login}>Login</button>
                    <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
                </div>
            </form>
        )
    }
}

export default MyAccount