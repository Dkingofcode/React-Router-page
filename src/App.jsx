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
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import SharedProductsLayout from './pages/SharedProducts';


function App() {
  const [user,setUser] = useState(null);  

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Sharedlayout />}>
       <Route index element={<Home />} />
      <Route path='about' element={<About />} /> 
      <Route path='products' element={<SharedProductsLayout />}>
       <Route index element={<Products />} />
      <Route path=':productId' element={<SingleProduct />} />
      </Route>
      <Route path='login' element={<Login setUser={setUser}></Login>} />
      <Route path='dashboard' element={<ProtectedRoute user={user}><Dashboard user={user}></Dashboard></ProtectedRoute>
      } 
      />
      <Route path='*' element={<Error />} />
      </Route>
      </Routes>
      </BrowserRouter>
    /* 
    <div className="App">
      <h1>React ROuter 6 Tutorial</h1>
    </div> 
  */
  );
}


export default App;
