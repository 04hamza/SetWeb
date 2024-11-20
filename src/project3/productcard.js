import React from 'react';
import './ProductCard.css';
 
const ProductCard = ({produit}) => {
  return (
    <div className="product-card ">
      <img src={produit.image} alt={produit.title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{produit.title}</h3>
        <p className="product-description limited-text">{produit.description}</p>
        <p className="product-price">${produit.price}</p>
        <button className="product-button" >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};
 
 
 
export default ProductCard;