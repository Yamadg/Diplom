import styles from "./Footer.module.scss";

import logoImg from "../../../assets/logo2.svg";
import policy from '../../../assets/policy.pdf'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.wrapper}>
        <div className={styles.footer__logo}>
          <img src={logoImg} alt={"LogoImg"} />
        </div>
        <ul className={styles.footer__document}>
          <li><Link to='/login'>Авторизация</Link></li>
          <li>Пользовательское соглашение</li>
          <li><a href={policy} target="_blank" rel="noreferrer">Политика обработки персональных данных</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
