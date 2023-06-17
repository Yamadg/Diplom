import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Login.module.scss";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8001/api/user/auth', {email: email, password: password})
    .then(data => {
        toast.success('Успешно');
        localStorage.setItem('token', data.data.token);
        navigate('/');
    })
    .catch(err => {
        toast.error(err.response.data.message)
    });
  };

  return (
    <Wrapper>
      <section className={styles.login}>
        <form className={styles.form}>
          <p className={styles.form__name}>Авторизация</p>
          <input
            className={styles.form__inputs}
            placeholder="Введите почту"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.form__inputs}
            placeholder="Введите пароль"
            type="password"
            autoComplete="true"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.form__buttons}
            type="submit"
            onClick={login}
          >
            Отправить
          </button>
        </form>
      </section>
      <ToastContainer />
    </Wrapper>
  );
}
