import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from "./About";
import Contact from "./Contact";
import Products  from "./Products";
import SingleProduct from "./SingleProduct";
import {Home } from "./Home";
import Cart from "./Cart";
import {ErrorPage} from "./ErrorPage";


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
  )
};

export default App;
