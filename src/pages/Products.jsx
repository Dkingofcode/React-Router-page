import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import image1 from '../assets/Iphone1.jpg';

const Products = () => {
  return (
    <div>
     <h1>Products</h1>
     <div className='products'>
       {products.map((product) => {
         return (
           <article key={product.id}>
            <h5>{product.name}</h5>
            <img src={image1} alt={product.name} />
            <Link to={`/products/${product.id}`}>more info</Link>
           </article>
         );
       })}  
      </div>
    </div>
  );
};

export default Products;