import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../feauters/cart/cartSlice.js";
import "./ProductPage.css";

export const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.catalog.allItems.find((item) => item.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <button className="buy-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};