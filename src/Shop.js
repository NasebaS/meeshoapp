import React, { useState, useEffect } from 'react';
import Slider from 'react-carousel';
import { API } from './products.js';
import Rating from '@mui/material/Rating';
import { ShopContext } from './shop-context';
import { useContext} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
 const Shop = (id) => {
  const {AddToCart,cartItems}= useContext(ShopContext)
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const TotalCartItem=cartItems[id];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch products');
        }
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      console.log(setIndex);
    };
//   let imagesArray=[]
//   for (let i = 0; i < products.length; i++) {
//   const obj = products[i];//objects
//   imagesArray = obj.images;//storing images array
  
//  console.table(imagesArray)
  
// }console.log('Count:',products.length)
  return (
    

 <div>
        
        {products.map((item, index) => (
          
          <div key={item.id}>
            <p>{item.title}</p>

            <Carousel
              width="100px"
              height="300px"
              float="center"
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              onSelect={handleSelect}
            >
              {item.images.map((pic) => (
                <img src={pic} alt={pic} />
              ))}
            </Carousel>
            <p><h1><b>${item.original_price}</b></h1></p>
            <div><h5 className='delivery'>Free Delivery</h5></div>
            <div><div className='rating'><Rating name="size-small" defaultValue={2} size="small" />{item.rating}
                  </div>
             </div>
             <button className='addtocart' type='button' onClick={(e)=>AddToCart(id)}><h3>Add To Cart{cartItems[id] > 0 && <>({TotalCartItem})</>}</h3></button>

            
          </div>
        ))}
      </div>

)
};

    export default Shop;

