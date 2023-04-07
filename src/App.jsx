import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import Sharedlayout from './pages/Sharedlayout';

function App() {
  

  return (
    <BrowserRouter>
    <nav>our navbar</nav>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
       <Route index element={<Home />} />
      <Route  path='about' element={<About />} /> 
      <Route path='products' element={<Products />} />
      <Route path='*' element={<Error />} />
      </Route>
      </Routes>
      
      <footer>our footer</footer>
      </BrowserRouter>
    /* 
    <div className="App">
      <h1>React ROuter 6 Tutorial</h1>
    </div> 
  */
  )
}

export default App;
