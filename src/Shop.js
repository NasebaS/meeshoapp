import React, { useEffect } from 'react'
import {API} from './products'
import Rating from '@mui/material/Rating';
import { ShopContext } from './shop-context';
import { useContext,useState } from 'react';
import {PictureComponent} from './PictureComponent'
import SampleNavbartwo from './SampleNavbartwo';
const Shop = () => { 
  const {AddToCart,cartItems}= useContext(ShopContext)
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
 console.log(products)
  // Do something with the list of tasks
}).catch(error => {
  setError(error)
  // handle error
})
  };
  useEffect(()=>getItems(),[]);

  
  return (   
   <div>
    {/* <div><SampleNavbartwo/></div> */}
    <div>
        {/* <h3><b>Meesho Shopping</b></h3> */}
        <div className='box-container'>
            <div className='boxinside-container'>
              
             {products.map((props)=>{
              
              const {title,id,rating,original_price}=props
              const TotalCartItem=cartItems[id]
                 return(
            <a href="#" key={id}><div className='container' >
             <div className='imagesdiv'>
              <PictureComponent id={products.id}/>
                 
                  </div>
                  <div>
                    <p>{title}</p>
                  </div>
                  <p><h1><b>${original_price}</b></h1></p>
                  <div><h5 className='delivery'>Free Delivery</h5></div>
                  <div><div className='rating'><Rating name="size-small" defaultValue={2} size="small" />{rating}
                  </div>
             </div>
             <button className='addtocart' type='button' onClick={(e)=>AddToCart(id)}><h3>Add To Cart{cartItems[id] > 0 && <>({TotalCartItem})</>}</h3></button>
            
            </div>
            </a>            
            )       })}
            </div>
            
        </div>
    </div></div>


  
  )
}

export default Shop