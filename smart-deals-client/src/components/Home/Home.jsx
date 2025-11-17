import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";
const LatestProductsPromise = fetch(
  "http://localhost:5000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <h3>This is Home</h3>
      <LatestProducts
        LatestProductsPromise={LatestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
