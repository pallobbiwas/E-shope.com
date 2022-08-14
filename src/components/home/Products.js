import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {product?.map((p) => {
          return (
            <div>
              <img src={p.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
