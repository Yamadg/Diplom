import React, {useState} from "react";
import styles from './Form.module.scss'
import formImg from '../../assets/slider2.jpg'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            message
        };

        // здесь Вы можете добавить логику для отправки данных формы на сервер

        // обнуляем состояние формы
        setName('');
        setEmail('');
        setMessage('');
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
                   name="name"
                   value={name}
                   onChange={handleNameChange}
            />

            <input className={styles.form__inputs}
                   placeholder='Введите почту'
                   type="email"
                   id="email"
                   name="email"
                   value={email}
                   onChange={handleEmailChange}
            />
            <textarea className={styles.form__textarea}

                      placeholder='Введите сообщение'
                      id="message"
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
            />


            <button className={styles.form__buttons} type="submit" onClick={handleSubmit}>
                Отправить
            </button>
        </form>



        </div>
    );
};

export default Form;