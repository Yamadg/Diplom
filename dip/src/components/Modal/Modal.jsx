import { useEffect } from "react";
import styles from './Modal.module.scss';

export default function Modal({ children, title, open, handleClose, small = false }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    open && 
    <div className={styles.modal}>
        <div className={`${styles.modal__wrapper} ${small && styles.small}`}>
            <div className={styles.modal__top}>
                <h3>{title}</h3>
                <div onClick={handleClose} className={styles.cross}>
                    x
                </div>
            </div>
            <div className={styles.modal__content}>
                {children}
            </div>
        </div>
    </div>
    
  )
}
