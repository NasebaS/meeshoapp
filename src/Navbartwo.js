import React from 'react'
import { ShopContext } from './shop-context'
import { useContext } from 'react'

const Navbartwo = () => {
  const {SareesCatergory}= useContext(ShopContext)
  return (
    <div className='navbar2'>
      <ul>
        <li data-id='sarees-id' onClick={()=>{ <SareesCatergory/>}}>Sarees Collection</li>
          {/* <div id='sarees-id'>
             <SareesCatergory/>
            </div> */}
        <li>Home and Kitchen</li>
        <li>Bags and Footwear</li>
        <li>Beauty and Health</li>
        <li>Mens Top Wear</li>
        <li>Dresses</li>
        <li>Jewellery</li>
        
        
      </ul>
       
    </div>
  )
}

export default Navbartwo