import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import './App.css';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import {ShopContextProvider} from './shop-context'


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <nav className='shopcartbtn'>
          <ul>
            <li>
              
              <Link to="/meeshoapp"className='homebtn-btn'>Home</Link>
              <Link to ="/meeshoapp/shop"onClick={()=>{<Shop/>}} className='shopbtn-btn'>Shopping</Link>
              <Link to ="/meeshoapp/cart"className='cartbtn-btn' onClick={()=>{<Cart/>}}>Cart</Link>
            </li>            
          </ul>          
        </nav>
        <Routes>
          <Route path="/meeshoapp" element={<Home/>}/>
          <Route path="/meeshoapp/shop" element={<Shop  />}/>
          <Route path="/meeshoapp/cart" element={<Cart/>}/>
        </Routes>
      
       </Router></ShopContextProvider>
       
    </div>
  );
}

export default App;
