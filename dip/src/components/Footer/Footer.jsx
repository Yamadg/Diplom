

import styles from './Footer.module.scss'

import logoImg from '../../assets/logo2.svg'


function Footer() {
    return (
        <div className={styles.footer}>
                <div className={styles.wrapper}>
            <div className={styles.footer__sections}>
                <p>Кто мы</p>
                <p>Чем отличаемся от других</p>
                <p>Контакты</p>
                <p>Наши работы</p>

            </div>
            <div className={styles.footer__document}>
                <p>Пользовательская соглашение</p>
                <p>Политика обработки персональных данных</p>
                <p>Презентация</p>
            </div>
            <div className={styles.footer__logo}>
                <img src={logoImg} alt={'LogoImg'}/>
            </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
}

export default Footer;
