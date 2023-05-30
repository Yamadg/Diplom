import { useState } from "react";
import styles from './Question.module.scss'

export default function Question({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.question__wrapper} onClick={() => setOpen(!open)}>
            <div className={styles.question__content}>
                <span className={styles.title}>{ title }</span>
                <span className={styles.plus}>{open ? '-' : '+'}</span>
            </div>

            {open && <div className={styles.question__main}>
                {children}
            </div>}
        </div>
    );
}