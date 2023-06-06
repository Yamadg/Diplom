import styles from './CommandItem.module.scss';

export default function CommandItem({ img, name, vacancy, exp, amount, children })  {

    return (
        <div className={styles.command__item}>
            <div className={styles.command__item_img}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.command__item_content}>
                <div className={styles.content__wrapper}>
                    <h3 className={styles.name}>{name}</h3>
                    <span className={styles.vacancy}>{vacancy}</span>
                    <p className={styles.info}>
                        Опыт: {exp} лет <br />
                        Количество проектов: {amount}
                    </p>
                    <p className={styles.detail}>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}