import React, {useState, forwardRef} from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Form.module.scss';

import formImg from '../../../assets/slider2.jpg';

const Form = forwardRef(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message
    };

    if(!(name.length && email.length && message.length)) {
      setError('Заполнены не все поля');
      return;
    }
    /* regular expression for email */
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setError('Почта введена неправильно');
      return;
    }

    await axios.post('http://localhost:8001/api/proposal/', {name, email, message})
    .then(() => {
      toast.success('Успешно')
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={formImg}/>
      <form className={styles.form}>
        <p className={styles.form__name}>Форма обратной связи</p>
        <input className={styles.form__inputs}
               placeholder='Введите имя'
               type="text"
               id="name"
               required
               minLength={2}
               name="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
        <input className={styles.form__inputs}
               placeholder='Введите почту'
               type="email"
               id="email"
               required
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <textarea className={styles.form__textarea}
                  placeholder='Введите сообщение'
                  id="message"
                  required
                  minLength={3}
                  maxLength={250}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
        />
        {error && <span className={styles.form__error}>{error}</span>}
        <button className={styles.form__buttons} type="submit" onClick={handleSubmit}>
          Отправить
        </button>
      <ToastContainer position="bottom-right" />
      </form>
    </div>
  );
});

export default Form;