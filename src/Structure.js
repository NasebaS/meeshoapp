import React from 'react'
import { useContext,useState } from 'react'
import Rating from '@mui/material/Rating';
import {API} from './products'
import {PictureComponent} from './PictureComponent'
import { ShopContext } from './shop-context';


const Structure = () => {
  const [products,setProducts]=useState([])  
  const {AddToCart,cartItems,sareesobj}= useContext(ShopContext)
  return (
    <div className='box-container'>
            <div className='boxinside-container'>
              
             {products.map((props)=>{
              
              const {title,id,rating,original_price}=props
              const TotalCartItem=cartItems[id]
                 return(
            <a href="#"><div className='container'>
             <div className='imagesdiv'>
              <PictureComponent/>
                 
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
   
  )
}

export default Structure