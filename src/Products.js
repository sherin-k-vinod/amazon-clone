import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASCKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="products">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p> </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button className="product__button" onClick={addToCart}>
        add to cart
      </button>
    </div>
  );
}

export default Products;
