import React, { useEffect, useState } from "react";
import img from "../../imge/img.png";
import "../../styel/header.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(isMore);

  return (
    <div>
      <div className="products_title pt-10 borderd">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <img className="h-80" src={img} alt="cover photos" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-purple-500 mb-4">
                Get 35% exclusive discount
              </h1>
              <button className="btn ">Get start</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <div className="mb-20">
          <h1 className="mb-5 text-6xl font-bold ">
            Your best choice t-shirt is here
          </h1>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {isMore
            ? product?.slice(0, 20).map((p, index) => {
                return (
                  <div key={index} className="borderd m-1 rounded-lg main-box">
                    <div className="box ">
                      <div className="w-72 mx-auto">
                        <img className="w-full img-box" src={p.img} alt="" />
                      </div>
                      <div className="bg-yellow-400 mt-8 py-4 rounded-lg">
                        <h1>Price: {p.price}</h1>
                        <h2>Seller: {p.seller}</h2>
                      </div>
                    </div>
                    <div className="intro text-center w-full">
                      <div className="pt-24">
                        <p className="mb-3">{p.name}</p>
                        <button className="mr-3 btn btn-sm">Add to card</button>
                        <button className="mr-3 btn btn-sm bg-slate-700">Details more</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : product?.map((p, index) => {
                return (
                  <div key={index} className="borderd m-1 rounded-lg main-box">
                    <div className="box">
                      <div className="w-72 mx-auto">
                        <img className="w-full img-box" src={p.img} alt="" />
                      </div>
                      <div className="bg-yellow-400 mt-8 py-4 rounded-lg">
                        <h1>Price: {p.price}</h1>
                        <h2>Seller: {p.seller}</h2>
                      </div>
                    </div>
                    <div className="intro text-center w-full">
                      <div className="pt-24">
                        <p className="mb-3">{p.name}</p>
                        <button className="mr-3">Add to card</button>
                        <button>Details more</button>
                      </div>
                    </div>
                  </div>
                );
              })}

          <button
            onClick={() => setIsMore(!isMore)}
            className="text-blue-500 underline mt-10 mb-20"
          >
            {isMore ? "See more.." : "Less more.."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
