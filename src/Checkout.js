import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://mltivmo3l3qm.i.optimole.com/Bobkih8-dms9yNUj/w:890/h:500/q:auto/https://lasersightdigital.com/wp-content/uploads/2019/02/how-to-advertise-on-amazon-blog-pic.png"
          className="checkout__banner"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">your cart is empty</h2>
            <p>
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.in homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your cart </h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
