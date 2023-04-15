import React, { useState } from "react";
import styles from './Form.module.scss'

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
        <form className={styles.form}>

            <input className={styles.form__inputs}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
            />

            <input className={styles.form__inputs}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
            />
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
            />



            <button type="submit" onClick={handleSubmit}>
                Отправить
            </button>

        </form>
    );
};

export default Form;