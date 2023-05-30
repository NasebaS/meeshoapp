import React,{useState,useEffect} from 'react'
import {API} from './products';
import Structure from "./Structure"
import { PictureComponent } from './PictureComponent';
import Rating from '@mui/material/Rating';

export const ShopContext=React.createContext(null);

export const ShopContextProvider = (props) => {
  const [products,setProducts]=useState([]) 
  const [cartItems,setCartItems]=useState({})
  const [error,setError]=useState(null);

  const getItems = ()=>{
    fetch(`${API}`, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  throw new Error('Failed to fetch products');
  // handle error
}).then(products => {
  setProducts(products)
  const tempsetid = {};
      for (let i = 1; i < products.length + 1; i++) {
        tempsetid[i] = 0;
      }
      setCartItems(tempsetid);
  // Do something with the list of tasks
}).catch(error => {
  setError(error)
  // handle error
})
  };
  useEffect(()=>getItems(),[]);
 
 
    const AddToCart=(tempsetid)=>{
      setCartItems((prev)=>({...prev, [tempsetid]: prev[tempsetid] + 1 }))
      
    }
    const RemoveFromCart=(tempsetid)=>{
      setCartItems((prev)=>({...prev, [tempsetid]: prev[tempsetid] - 1 }))
    }
    
      
        const TotalCartAmount=()=>{
          let totalCartAmount=0
           for(const i in cartItems){
            if(cartItems[i]>0){
              let iinfo=products.find((props)=>props.id===Number(i))
              
              totalCartAmount+=(cartItems[i]*iinfo.original_price)
              
            }
            }
         return totalCartAmount;
    }

     
  const contextValue={AddToCart,RemoveFromCart,cartItems,setCartItems,TotalCartAmount}
 
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


