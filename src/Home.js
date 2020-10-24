import React, { useEffect, useState } from "react";
import "./Home.css";
import "./Products";
import Products from "./Products";
function Home() {
  const [products, setproduct] = useState([]);

  useEffect(() => {
    const getproductData = async () => {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((response) => response.json())
        .then((data) => {
          const products = data.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          }));

          setproduct(products);
        });
    };

    getproductData();
  }, []);

  return (
    <div className="home">
      <img
        src="https://technostacks.com/wp-content/uploads/2018/03/amazonalexa_banner.jpg"
        className="home__banner"
      />
      <div className="home__row">
        {products.map((product) => (
          <Products
            id={product.id}
            title={product.title}
            price={product.price}
            rating={4}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
