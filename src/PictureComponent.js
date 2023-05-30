import React, { useState, useEffect } from 'react';
import Slider from 'react-carousel';
import { API } from './products.js';

export const PictureComponent = (id) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

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

//   let imagesArray=[]
//   for (let i = 0; i < products.length; i++) {
//   const obj = products[i];//objects
//   imagesArray = obj.images;//storing images array
  
// //  console.table(imagesArray)
  
// }console.log('Count:',products.length)
  return (
    //   <div>
    //   {products.map((product) =>  (
    //     <div key={product.id}>
    //       <h2>{product.title}</h2>
      

    //       {product.images.map((image, index) => (
    //         <img key={index} src={image} alt={`Image ${index + 1}`} />
    //       ))}
    //     </div>
    //   ) )}
    // </div>
    <div>
      {products.map((product)=>(
         <div key={product.id}>
         <h2>{product.title}</h2>
          {product.images.map((image, index) => (
            <img key={index} src={products[id].image} alt={`Image ${index + 1}`} />
          ))}
          </div>  
      ))}
    </div>
)
};

    

