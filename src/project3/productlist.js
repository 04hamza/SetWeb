import React, { useState, useEffect } from 'react';
import ProductCard from './productcard';
const Compteur = () => {
  const [produits,SetProduits]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>SetProduits(data))  }, []);
  return (
    <div className='row'>
      <h1>La liste de Produits </h1>
 
      {produits.map((elm)=>(
        <span key={elm.id} className='col-3'>
        <ProductCard produit={elm} className/>
        </span>
      ))
      }
    </div>
  );
};
 
export default Compteur;