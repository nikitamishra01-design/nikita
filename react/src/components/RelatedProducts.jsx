
import React from "react";
import { Link } from "react-router-dom";
import "./RelatedProducts.css";

function RelatedProducts({ products, category, currentId }) {

  const related = products
    .filter((p) => p.category === category && p.id !== currentId)
    .slice(0, 4); 

  if (related.length === 0) {
    return null; 
  }

  return (
    <div className="related-products-section">
      <h3> Related product {category}</h3>
      <div className="related-products-grid">
        {related.map((item) => (
          <div key={item.id} className="related-product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <Link to={`/product/${item.id}`} className="view-btn">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
