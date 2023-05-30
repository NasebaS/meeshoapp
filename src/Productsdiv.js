import React from 'react'
import { PRODUCTS } from './products'

const Productsdiv = () => {
  return (
    <div>
        {PRODUCTS.map((products)=>{
            return(
            <div>
                <div>
                 <img src={products.images} alt="Sarees"/>
                </div>
               <div>
                <p>{products.title}</p>
               </div>
            </div>)
        })}
  </div>)}
export default Productsdiv