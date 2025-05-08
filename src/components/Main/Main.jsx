import React from "react";
import { ProductCard } from "./ProductCard";
import "./Main.css";

// Пример данных
const products = [
  { id: 1, name: "K/DA Ahri Poster", price: 25, image: "/img/ahri.jpg" },
  { id: 2, name: "K/DA Akali Hoodie", price: 60, image: "/img/akali.jpg" },
  { id: 3, name: "K/DA Kai'Sa Figurine", price: 40, image: "/img/kaisa.jpg" },
];


export const Main = () => {
  return (
    <div className="main-container">
      <h1 className="title">Featured Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};