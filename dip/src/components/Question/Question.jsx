import { useState } from "react";
import styles from './Question.module.scss'

export default function Question({ title, children }) {
    
    return (
        <div className={styles.question__wrapper}>
            <div className={styles.question__content}>
                <span className={styles.title}>{ title }</span>
            </div>

            <div className={styles.question__main}>
                {children}
            </div>
        </div>
    );
}