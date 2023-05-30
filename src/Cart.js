import React from 'react'
import {API} from './products'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { ShopContext } from './shop-context';
import { useContext,useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {AddToCart,RemoveFromCart,cartItems,TotalCartAmount}= useContext(ShopContext)
  const totalCartAmount=TotalCartAmount();
  const [products,setProducts]=useState([])
  const [error,setError]=useState(null);

  const getItems = ()=>{
    fetch(`${API}`, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(products => {
  setProducts(products)
  
  // Do something with the list of tasks
}).catch(error => {
  setError(error)
  // handle error
})
  };
  useEffect(()=>getItems(),[]);


  const navigate=useNavigate();
  return (
    <div className='cart-div'>
        <div>
            <h2>Your Cart Items:</h2>
        </div>
        <div className='cartitems-container'>
            {products.map((props)=>{
              const {images,name,title,original_price,id}=props
              if(cartItems[id]>0){
                return(
                    <div className='separatecartiems-container'>
                       <div>
                         <img src={images} alt={name}/>
                      </div>
                      <div><h3>{title}</h3></div>
                      <div><h4>${original_price}</h4>
                      <button onClick={()=>AddToCart(id)}>+</button>
                      <TextField hiddenLabel id="filled-hidden-label-small" defaultValue={cartItems[id]} variant="outlined" size=""/>
                      <button onClick={()=>RemoveFromCart(id)}>-</button></div>
                    </div>
            )
              }
                    
            })}
              <div className='subtotal'>
                  <p><b>SubTotal:</b> $   <TextField hiddenLabel id="filled-hidden-label-small1" defaultValue={totalCartAmount} variant="outlined" size=""/></p>
                  <div className='checkout-btn'>
                      <Button id="checkout-btn" variant="contained" onClick={()=>navigate("/meeshoapp/shop")}>Continue Shopping<ShoppingCartCheckoutIcon/></Button>
                      <Button variant="contained" id="checkout-btn"onClick={()=>navigate("/meeshoapp/home")}>Checkout</Button>
                  </div>
          
              </div>
        
        </div>
        
    </div>
  )
}

export default Cart