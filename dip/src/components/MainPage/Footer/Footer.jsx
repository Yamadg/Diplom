import styles from "./Footer.module.scss";

import logoImg from "../../../assets/logo2.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.wrapper}>
        <div className={styles.footer__logo}>
          <img src={logoImg} alt={"LogoImg"} />
        </div>
        <ul className={styles.footer__sections}>
          <li>Кто мы</li>
          <li>Чем отличаемся от других</li>
          <li>Контакты</li>
          <li>Наши работы</li>
        </ul>
        <ul className={styles.footer__document}>
          <li>Пользовательская соглашение</li>
          <li>Политика обработки персональных данных</li>
          <li>Презентация</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
