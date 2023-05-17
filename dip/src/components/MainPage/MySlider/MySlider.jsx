import React, {useState} from 'react';

import Slider from "react-slick";

import {Responsive} from "react-responsive";

import {iconsData} from "../../../mockData/iconsData";

import style from './MySlider.module.scss'

import build from "../../../assets/fon1.jpg"

const MySlider = () => {
  const [offset, setOffset] = useState(0)

  const nextButtonClick = () => {
    setOffset(offset - 800)
    if (offset === -3200) setOffset(0)
  }

  const prevButtonClick = () => {
    setOffset(offset + 800)
    if (offset === 0) setOffset(-3200)
  }

  return (
    <div className={style.slider}>
      <button onClick={prevButtonClick}>Prev</button>
      <div className={style.slider__line}>
        {iconsData.map(icon => {
          return (
            <div
              style={{transform: `translateX(${offset}px)`}}
              className={style.container}
              key={icon.id}
            >
              <img src={icon.icon} alt="Аниме"/>
            </div>
          )
        })}
      </div>
      <button onClick={nextButtonClick}>Next</button>
    </div>
  );
};

export default MySlider;