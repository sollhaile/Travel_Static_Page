
import React from 'react';

function Card({  name, country,  location, Image, description }) {
  return (
    <div className="product-card">
       <img src={Image} alt="Image with some places" className="product-image"/>
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Country:</strong> {country}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;