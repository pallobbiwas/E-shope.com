import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SubBanner = () => {
  return (
    <div className="container-fluid mt-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, sit?
          </p>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SubBanner;
