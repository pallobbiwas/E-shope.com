import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../styel/header.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SubBanner = () => {
  const [adds, setAdd] = useState([]);
  useEffect(() => {
    fetch("addData.json")
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {adds.map((a, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mt-10 mb-14 grid grid-cols-1 md:grid-cols-2 borderd">
                <div className="h-56">
                  <img className="h-full" src={a.img} alt="" />
                </div>
                <div className="bg-yellow-400 w-60 p-3 text-left md:text-center">
                  <h1>Name: {a.name}</h1>
                  <h1 className="mt-2 mb-4">price: {a.price}</h1>
                  <p className="text-red-600 text-2xl font-semibold mb-4">{a.discount} Discount</p>
                  <button className="btn btn-sm bg-blue-500">Buy now</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SubBanner;
