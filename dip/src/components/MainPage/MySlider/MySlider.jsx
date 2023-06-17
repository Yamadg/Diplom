import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { iconsData } from "../../../mockData/iconsData";
import style from "./MySlider.module.scss";
import build from "../../../assets/fon1.jpg";

const MySlider = () => {
  const [offset, setOffset] = useState(0);
  const [amountOfSlides] = useState(iconsData.length - 1);
  const [perSlide, setPerSlide] = useState(100);

  const nextButtonClick = () => {
    setOffset(offset - perSlide);
    console.log(-(amountOfSlides * perSlide));
    if (offset === -(amountOfSlides * perSlide)) setOffset(0);
  };

  const prevButtonClick = () => {
    setOffset(offset + perSlide);
    if (offset === 0) setOffset(-(amountOfSlides * perSlide));
  };

  // useEffect(() => {
  //   if(window.matchMedia('(max-width: 768px)').matches) {
  //     setPerSlide(400);
  //   }
  //
  // }, [])

  return (
    <div className={style.slider}>
      <div className={style.slider__line}>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{delay: 5000}}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {iconsData.map((icon) => (
            <SwiperSlide key={icon.id}>
              <img className={style.img__slider} src={icon.icon} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySlider;
