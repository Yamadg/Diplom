import React, {useState, forwardRef} from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Form.module.scss';

import formImg from '../../../assets/slider2.jpg';
import policy from '../../../assets/policy.pdf'

const Form = forwardRef(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(!(name.length)) {
      setError((data) => ({...data, name: 'Введите имя'}));
    } else {
      setError((data) => ({...data, name: ''}));
    }

    if (!(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(name))) {
      setError((data) => ({...data, name: 'Введите корректное имя'}));
    }

    if(!(email.length)) {
      setError((data) => ({...data, email: 'Введите почту'}));
    } else {
      setError((data) => ({...data, email: ''}));
    }

    /* regular expression for email */
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setError((data) => ({...data, email: 'Почта введена неправильно'}));
    }

    if(!(message.length)) {
      setError((data) => ({...data, message: 'Введите сообщение'}));

    } else {
      setError((data) => ({...data, message: ''}));
    }

    if(!agree) {
      setError((data) => ({...data, agree: 'Пожалуйста, согласитесь на обработку данных.'}))

    } else {
      setError((data) => ({...data, agree: ''}));
    }

    if(Object.values(error).filter(Boolean).length) {
      return;
    }

    await axios.post('https://backend.vorobyova-project.ru/api/proposal/', {name, email, message})
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
    <div className={styles.wrapper} id="form">
      <img className={styles.img} src={formImg}/>
      <form className={styles.form}>
        <p className='title'>Форма обратной связи</p>
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
        
        <span className={styles.form__error}>{error?.name}</span>
        <input className={styles.form__inputs}
               placeholder='Введите почту'
               type="email"
               id="email"
               required
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <span className={styles.form__error}>{error?.email}</span>
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
        <span className={styles.form__error}>{error?.message}</span>
        <label className={styles.form__checkbox}>
          <input value={agree} onChange={(e) => setAgree(!!e.target.checked)} type="checkbox" />
          <span>Согласие на <a href={policy} target="_blank" rel="noreferrer">обработку персональных данных</a></span>
        </label>
        <span className={styles.form__error}>{error?.agree}</span>
        <button className={styles.form__buttons} type="submit" onClick={handleSubmit}>
          Отправить
        </button>
      <ToastContainer position="bottom-right" />
      </form>
    </div>
  );
});

export default Form;