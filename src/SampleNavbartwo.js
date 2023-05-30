import React from 'react'
import { ShopContext } from './shop-context'
import { useEffect,useState } from 'react'
import {API} from './products'
import Structure from "./Structure"
import { PictureComponent } from './PictureComponent';
import Rating from '@mui/material/Rating';

const SampleNavbartwo = () => {
  
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
  return (
    <div className='samplenavbar2btn'>
       <ul>
       <li className='sareesbtn'data-expands='#sarees-id' ><a href='#sarees-id'>Sarees Collection</a></li>
       <li className='homekitchenbtn' data-expands='#homekitchen-id'><a href='#homekitchen-id'>Home and Kitchen</a></li>
        <li className='bagsbtn' data-expands='#bags-id'><a href='#bags-id'>Bags and Footwear</a></li>
        <li className='beautybtn' data-expands='#beauty-id'><a href='#beauty-id'>Beauty and Health</a></li>
        <li className='menswearbtn' data-expands='#menswear-id'><a href='#menswear-id'>Mens Top Wear</a></li>
        <li className='dressbtn' data-expands='#dress-id'><a href='#dress-id'>Dresses</a></li>
        <li className='jewelbtn' data-expands='#jewel-id'><a href='#jewel-id'>Jewellery</a></li>
        </ul>
        
        <div id='sarees-id' className='listcontainer sarees-id'>
      
      {products.filter(prd=>prd.category==="sarees"?
       
            <a href="#"><div className='container' key={prd.id}>
             <div className='imagesdiv'>
              <PictureComponent/>
                 
                  </div>
                  <div>
                    <p>{prd.title}</p>
                  </div>
                  <p><h1><b>${prd.original_price}</b></h1></p>
                  <div><h5 className='delivery'>Free Delivery</h5></div>
                  <div><div className='rating'><Rating name="size-small" defaultValue={2} size="small" />{prd.rating}
                  </div>
             </div>
             {/* <button className='addtocart' type='button' onClick={(e)=>AddToCart(prd.id)}><h3>Add To Cart{cartItems[prd.id] > 0 && <>({TotalCartItem})</>}</h3></button> */}
            
            </div>
            </a> 
            
            : null)          
      }
    </div>
    </div>
  )
}

export default SampleNavbartwo