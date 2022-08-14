import React from "react";

const banner = () => {
  return (
    <div>
      <div
        class="hero h-96"
        style={{
          backgroundImage:
            "url(https://theapparelshack.com/wp-content/uploads/2021/09/The-Apparel-Shack-upf-50-Performance-Shirt-Web-Banner-scaled.jpg)",
        }}
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-4xl font-bold text-yellow-400">Welcome to Online shopping</h1>
            <p class="mb-5 text-1xl font-bold ">
              We are providing best quality product.Here is the best T-shirt for male and female both.We provide qualityfull product
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
