import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from "./About";
import Contact from "./Contact";
import Products  from "./Products";
import SingleProduct from "./SingleProduct";
import {Home } from "./Home";
import Cart from "./Cart";
import {ErrorPage} from "./ErrorPage";
import {GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";


const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    },
  };
  return(
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
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
    </ThemeProvider>
  )
};

export default App;
