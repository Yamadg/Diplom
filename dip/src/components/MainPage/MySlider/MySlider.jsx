import React, { useEffect, useState } from "react";

import { iconsData } from "../../../mockData/iconsData";
import style from "./MySlider.module.scss";
import build from "../../../assets/fon1.jpg";

const MySlider = () => {
  const [offset, setOffset] = useState(0);

  const nextButtonClick = () => {
    setOffset(offset - 800);
    if (offset === -3200) setOffset(0);
  };

  const prevButtonClick = () => {
    setOffset(offset + 800);
    if (offset === 0) setOffset(-3200);
  };

  return (
    <div className={style.slider}>
      <button onClick={prevButtonClick}><i className={`${style.arrow}  ${style.prev}`}></i></button>
      <div className={style.slider__line}>
        {iconsData.map((icon) => {
          return (
            <div
              style={{ transform: `translateX(${offset}px)` }}
              className={style.container}
              key={icon.id}
            >
              <img src={icon.icon} alt={`Слайд ${icon.id}`} />
            </div>
          );
        })}
      </div>
      <button onClick={nextButtonClick}><i className={`${style.arrow}  ${style.next}`}></i></button>
    </div>
  );
};

export default MySlider;
