import React from 'react';

import styles from './Section.module.scss'
import sectionImg from '../../assets/fon1.jpg'
import checkImg from '../../assets/check-line.svg'


const Section = () => {
    return (
        <>
        <section className={styles.section}>
            <div className={styles.section__wrapper}>
                <div className={styles.section__text}>
                    <p className={styles.section__text__title}>проектирование<br/>любой сложности</p>
                    <span className={styles.section__text__title}>надежный<br/> быстрый</span>
                    <p className={styles.section__text__added}>От проектировщиков,знающих своё дело</p>
                </div>
                <img className={styles.section__img} src={sectionImg} alt={sectionImg}/>
            </div>
            <button className={styles.section__button}>Оставить заявку</button>
        </section>


            <section className={styles.advantages}>
                <p className={styles.advantages__title}>Преимущества <img className={styles.advantages__check} src={checkImg} alt={'checkImg'}/></p>

                <p className={styles.advantages__info}>
                <p className={styles.advantages__info__text}>Беремся за заказы любой<br/>сложности</p>
                <p className={styles.advantages__info__text}>Связь в любое время по <br/>всем впоросам</p>
                <p className={styles.advantages__info__text}>Большой опыт работы</p>
                </p>
            </section>

        </>
    );
};

export default Section;