import React, { Component } from "react";
import fire from "./config/fire";
import { withRouter} from 'react-router-dom';
import Spinner from "./Spinner";
import "./styles/my-account.css";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading:false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = e => {
    e.preventDefault();
    this.setState({isLoading:true});
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("Successfully Signed Up");
        this.setState({isLoading:false});
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error: " + err.toString());
        this.setState({isLoading:false, email: "",
        password: "",});
        alert("Error: " + err.toString());
      });
  };

  login = e => {
    e.preventDefault();
    this.setState({isLoading:true});
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("Successfully Logged In");
        this.setState({isLoading:false});
        alert("Login Successful");
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error: " + err.toString());
        this.setState({isLoading:false, email: "",
        password: "",});
        alert("Error: " + err.toString());
      });
  };

  render() {
    if(this.state.isLoading) return <Spinner />;
    return this.props.isLoggedIn ? (
      <p className="logInMsg">You're already logged in. Happy Shopping!!!</p>
    ) : (
      <form className=".form">
        <div className="container-form">
          <div>
            <div className="email-div">Email</div>
            <input
              id="email"
              placeholder="Enter Email.."
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <div className="password-div">Password</div>
            <input
              id="password"
              placeholder="Enter Password.."
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn-login" onClick={this.login}>
            Login
          </button>
          <button className="btn-signup" onClick={this.signUp}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(MyAccount);
