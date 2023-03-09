import React from 'react';

import styles from './Section.module.scss'
import SectionImg from '../../assets/fon1.jpg'


const Section = () => {
    return (
        <section className={styles.section}>
            <div className={styles.section__wrapper}>
                <div className={styles.section__text}>
                    <p className={styles.section__text__title}>проектирование<br/>любой сложности</p>
                    <span className={styles.section__text__title}>надежный<br/> быстрый</span>
                    <p className={styles.section__text__added}>От проектировщиков,знающих своё дело</p>
                </div>
                <img className={styles.section__img} src={SectionImg} alt={SectionImg}/>
            </div>
            <button className={styles.section__batton}></button>
        </section>
    );
};

export default Section;