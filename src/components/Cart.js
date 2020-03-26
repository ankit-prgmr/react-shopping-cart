import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import {database} from "./config/fire";
import UserContext from './UserContext';
import CartItem from "./CartItem";
import Spinner from "./Spinner";
class Cart extends Component{
  static contextType = UserContext
  constructor(props){
    super(props)
    this.state = {
      cart: {},
      isLoading:true
    }
  }
  componentDidMount() {
    this.dataFetch();
  }

  dataFetch = () => {
    const user = this.context
    database.ref("users/"+user.userData.uid).once("value", snap => {
      if(snap.exists() && snap.val().hasOwnProperty("cart")){
        const {cart} = snap.val();
        this.setState({cart:cart, isLoading:false});
      }
      else{
        const cart = {}
        this.setState({cart:cart, isLoading:false});
      }
    }).then(()=>{
      console.log("data fetched")
      console.log(this.state.cart,this.state.isLoading);
    }).catch((err) => {
      console.log(err);
      this.setState({isLoading:false});
      alert("Err",err.toString());
    })
  }

  handleAddQty = (cartId, newCartItem) => {
    const user = this.context;
    let userRef = database.ref("users/" + user.userData.uid);
            
    userRef.child('cart/'+cartId).set(newCartItem).then(()=>{
       console.log("Qty added");
       this.dataFetch();
      }).catch(err => alert(err));
  }

  handleSubQty = (cartId, newCartItem) => {
    const user = this.context;
    let userRef = database.ref("users/" + user.userData.uid);
            
    userRef.child('cart/'+cartId).set(newCartItem).then(()=>{
       console.log("Qty Subtracted");
       this.dataFetch();
      }).catch(err => alert(err));
  }

  handleRemoveItem = (cartId) => {
    const user = this.context;
    let userRef = database.ref("users/" + user.userData.uid);
            
    userRef.child('cart/'+cartId).remove().then(()=>{
      console.log("Item removed");
      this.dataFetch();
    }).catch(err => alert(err));
  }

  render(){
    if(this.state.isLoading) return <Spinner />;
    let uniqKeys,items=[];
    if(Object.keys(this.state.cart).length !==0){
      uniqKeys = Object.getOwnPropertyNames(this.state.cart);
      for(let i=0 ; i<uniqKeys.length ; i++){
        items.push(<CartItem key={uniqKeys[i]} item={this.state.cart[uniqKeys[i]]}
          handleAddQuantity={this.handleAddQty} handleSubtractQuantity={this.handleSubQty}
          handleRemove = {this.handleRemoveItem}  cartId={uniqKeys[i]}
        />); 
      }
    }
    return(
      Object.keys(this.state.cart).length !==0 ? (
          <div>
            <h4 style={{textAlign:"center"}}>You have ordered:</h4>
            {
              items
            }
          </div>
        ) : (
          <p style={{textAlign:"center"}}>You've not added anything to your cart yet</p>
        )
    )
  }
}

export default withRouter(Cart);