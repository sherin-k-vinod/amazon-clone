import React from "react";
import "./Home.css";
import "./Products";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <img
        src="https://technostacks.com/wp-content/uploads/2018/03/amazonalexa_banner.jpg"
        className="home__banner"
      />
      <div className="home__row">
        <Products
          id="123456"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="7891230"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="123456"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="7891230"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="7891230"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />{" "}
        <Products
          id="123456"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="7891230"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="123456"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
        <Products
          id="7891230"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id="123456"
          title="this is product 1 and it is good product"
          price={200}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
