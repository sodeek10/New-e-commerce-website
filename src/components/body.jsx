// import { useState, useEffect } from "react";
const products = [
  {
    title: "Short jacket in long-pile faux fur",
    price: 150.0,
    imageUrl: "./image6.png",
  },
  {
    title: "Women's walking shoes tennis sneakers",
    price: 54.99,
    imageUrl: "./image7.png",
  },
  {
    title: "Classic aviator sunglasses for women",
    price: 76.0,
    imageUrl: "./image8.png",
  },
];
const Body = () => {
  return (
    <div className="body1">
      <div className="body-image1">
        <img src="./image5.png" alt="girl" id="babe" />
      </div>
      <div className="body-content">
        <h5>Popular products</h5>
        {products.map((products, index) => (
          <div className="body-content2 flex" key={index}>
            <div className="body-image2">
              <img src={products.imageUrl} alt={products.title} id="babes" />
            </div>
            <div className="body-content3">
              <h2>{products.title}</h2>
              <h3>${products.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
