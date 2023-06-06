import React, { useEffect, useState } from "react";

import { iconsData } from "../../../mockData/iconsData";
import style from "./MySlider.module.scss";
import build from "../../../assets/fon1.jpg";

const MySlider = () => {
  const [offset, setOffset] = useState(0);
  const [amountOfSlides] = useState(iconsData.length - 1);
  const [perSlide, setPerSlide] = useState(100);

  const nextButtonClick = () => {
    setOffset(offset - perSlide);
    console.log(-(amountOfSlides * perSlide))
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
      <button onClick={prevButtonClick}><i className={`${style.arrow}  ${style.prev}`}></i></button>
      <div className={style.slider__line}>
        {iconsData.map((icon) => {
          return (
            <div
              style={{ transform: `translateX(${offset}%)` }}
              className={style.container}
              key={icon.id}
            >
                <img className={style.img__slider} src={icon.icon} alt={`Слайд ${icon.id}`} />
            </div>
          );
        })}
      </div>
      <button onClick={nextButtonClick}><i className={`${style.arrow}  ${style.next}`}></i></button>
    </div>
  );
};

export default MySlider;
