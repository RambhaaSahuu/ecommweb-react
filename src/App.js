import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from "./About";
import Contact from "./Contact";
import Products  from "./Products";
import SingleProduct from "./SingleProduct";
import Home from "./Home";
import Cart from "./Cart";
import {ErrorPage} from "./ErrorPage";
import {GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";


const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:"Limera-gradient, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:" rgba(0,0,0,0.16)0px 1px 4px",

    },
    media: {
      mobile:"768px",
      tab:"998px",
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
