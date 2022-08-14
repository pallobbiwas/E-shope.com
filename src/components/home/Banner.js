import React from "react";

const banner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://theapparelshack.com/wp-content/uploads/2021/09/The-Apparel-Shack-upf-50-Performance-Shirt-Web-Banner-scaled.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-yellow-400">Welcome to Online shopping</h1>
            <p className="mb-5 text-1xl font-bold ">
              We are providing best quality product.Here is the best T-shirt for male and female both.We provide qualityfull product
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
