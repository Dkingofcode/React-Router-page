import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import image from '../assets/Iphone1.jpg';


const SingleProduct = () => {
   const { productId } = useParams();
   const product = products.find((product) => product.id === productId);
   const { img, name } = product;

  return (
    <div className='product'>
      <img src={image} alt={name} />  
      <h2>{name}</h2>
      <h5>{productId}</h5>   
      <h3>SingleProduct</h3>
      <Link to='/products'>back to products</Link>
    </div>
  );
};

export default SingleProduct;