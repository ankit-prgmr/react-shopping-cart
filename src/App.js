import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import fire from "./components/config/fire";
import {database} from "./components/config/fire";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import MyAccount from "./components/MyAccount";
import Error from "./components/Error";
import Cart from "./components/Cart";
import PrivateRoute from "./components/PrivateRoute";
import CheckUser from "./components/CheckUser";
import { UserProvider } from './components/UserContext'
import Spinner from "./components/Spinner";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: null,
      isLoading:true,
      userData:{}
    };
  }

  

  authListener =() => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user:user});
        const userData = {
          uid: user.uid,
          email: user.email
        }
        this.checkIfUserDataExists(userData);
        console.log("Auth state changed");
      }
      else {
        this.setState({user: null, isLoading:false});
      }
    });
  }

  checkIfUserDataExists(userData){
    database.ref('users/' + userData.uid).once("value" , snap => {
      if(snap.val() === null){
       this.writeUserData(userData);
      }
      else{
        this.setState({userData:userData, isLoading:false})
      }
    });
  }

  componentDidMount(){
    this.authListener();
  }

  writeUserData(user) {
    database.ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });
    this.setState({isLoading:false});
}
I

  render(){
    if(this.state.isLoading) return <Spinner />;
    return(
      <div>
        <NavBar/>
        <CheckUser user={this.state.user}/>
        <Switch>
            <Route exact path="/">
              <UserProvider value={{user: this.state.user, userData: this.state.userData}}>
                <Home />
              </UserProvider>
            </Route>
            <Route path="/MyAccount">
              <MyAccount isLoggedIn={this.state.user}/>
            </Route>
            <PrivateRoute path="/Cart" isLoggedIn={this.state.user}>
              <UserProvider value={{user: this.state.user, userData: this.state.userData}}>
                <Cart/>
              </UserProvider>
            </PrivateRoute>
            <Route>
              <Error />
            </Route>
        </Switch>
      </div>
      
    )
  }
}

export default App;
