import React, {useRef, useState} from 'react';

import { slide as Menu } from 'react-burger-menu';

import Nav from "./Nav/Nav";
import MySlider from "./MySlider/MySlider";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import Wrapper from '../Wrapper/Wrapper';

import styles from "./MainPage.module.scss";

import advantages from "../../assets/check-line.svg";
import building from "../../assets/fon1.jpg";

const MainPage = () => {
  // const myRef = useRef();
  //
  // const handleClick = () => {
  //   if (myRef.current) {
  //     const element = myRef.current.getBoundingClientRect();
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const y = element.top + scrollTop;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // }

  return (
    <Wrapper className={styles.mainPage}>
      <section>
        <div className={styles.mainPage__aboutUs}>
          <div className={styles.mainPage__aboutUs__order}>
            <h2 className={styles.mainPage__aboutUs__order__title}>
              ПРОЕКТИРОВАНИЕ ЛЮБОЙ СЛОЖНОСТИ
            </h2>
            <h2 className={styles.mainPage__aboutUs__order__title}>
              БЫСТРЫЙ НАДЕЖНЫЙ
            </h2>
            <div className={styles.mainPage__aboutUs__order__subTitle}>
              От проектировщиков,знающих своё дело
            </div>
            
            <a className={styles.mainPage__aboutUs__order__link} href="#form">
              <button type="submit"
                 // onClick={handleClick}
                 className={styles.mainPage__aboutUs__order__button}
              >
                Оставить заявку
              </button>
            </a>
          </div>
          <div><img src={building} alt="Фото" className={styles.mainPage__aboutUs__img}/></div>
        </div>
        {/* <div className={styles.mainPage__advantages}>
          <img src={advantages} alt="Фото"/>
        </div> */}
        <section className={styles.advantages}>
                <p className={styles.advantages__title}>Преимущества <img className={styles.advantages__check} src={advantages}  alt={'checkImg'}/></p>

                <p className={styles.advantages__info}>
                <p className={styles.advantages__info__text}>Беремся за заказы любой<br/>сложности</p>
                <p className={styles.advantages__info__text}>Связь в любое время по <br/>всем впоросам</p>
                <p className={styles.advantages__info__text}>Большой опыт работы <br /> в проектировании</p>
                </p>
            </section>
        <MySlider/>
        <Form />
      </section>
    </Wrapper>
  );
};

export default MainPage;