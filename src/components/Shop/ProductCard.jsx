import { useDispatch } from "react-redux";
import { addToCart } from "../../feauters/cart/cartSlice.js";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };


  return (
    <div className="product-card" onClick={handleClick}>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{product.color}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};