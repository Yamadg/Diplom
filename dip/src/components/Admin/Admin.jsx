import Wrapper from "../Wrapper/Wrapper";
import styles from "./Admin.module.scss";
import bin from "../../assets/bin.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";

export default function Admin() {
  const [authToken] = useState(localStorage.getItem("token"));
  const [proposals, setProposals] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [item, setItem] = useState({});

  async function fetchProposals() {
    await axios
      .get("https://backend.vorobyova-project.ru/api/proposal", {
        headers: { Authorization: authToken },
      })
      .then(({ data }) => setProposals(data));
    return true;
  }

  const handleEdit = (id) => {
    const item = proposals.find((propose) => propose.id === id);
    setOpenEditModal(true);
    setItem(JSON.parse(JSON.stringify(item)));
  };

  const handleDelete = (id) => {
    const item = proposals.find((propose) => propose.id === id);
    setOpenDeleteModal(true);
    setItem(JSON.parse(JSON.stringify(item)));
  };

  const saveEditable = async (e) => {
    e.preventDefault();
    console.log(item);
    await axios
      .patch(`https://backend.vorobyova-project.ru/api/proposal/${item.id}`, item, {
        headers: { Authorization: authToken },
      })
      .then(() => fetchProposals())
      .catch((err) => console.log(err))
      .finally(() => setOpenEditModal(false));
  };

  const deleteItem = async () => {
    await axios
      .delete(`https://backend.vorobyova-project.ru/api/proposal/${item.id}`, {
        headers: { Authorization: authToken },
      })
      .then(() => fetchProposals())
      .catch((err) => console.log(err))
      .finally(() => setOpenDeleteModal(false));
  };

  useEffect(() => {
    fetchProposals();
  }, []);
  return (
    <Wrapper>
      <h1>Заявки</h1>
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Почта</th>
              <th>Сообщение</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {proposals?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.text}</td>
                <td className={styles.actions}>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className={styles.action__button}
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={styles.action__button}
                  >
                    <img src={bin} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title={`Редактирование заявки №${item.id}`}
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      >
        <form className={styles.form}>
          <input
            className={styles.form__inputs}
            placeholder="Введите имя"
            type="text"
            id="name"
            required
            minLength={2}
            name="name"
            onChange={(e) => setItem((item) => ({...item, name: e.target.value}))}
            value={item.name}
          />
          <input
            className={styles.form__inputs}
            placeholder="Введите почту"
            type="email"
            id="email"
            required
            name="email"
            value={item.email}
            onChange={(e) => setItem((item) => ({...item, email: e.target.value}))}
          />
          <textarea
            className={styles.form__textarea}
            placeholder="Введите сообщение"
            id="message"
            required
            minLength={3}
            maxLength={250}
            name="message"
            value={item.text}
            onChange={(e) => setItem((item) => ({...item, text: e.target.value}))}
          />
          {/* {error && <span className={styles.form__error}>{error}</span>} */}
          <button
            className={styles.form__buttons}
            type="submit"
            onClick={saveEditable}
          >
            Отправить
          </button>
        </form>
      </Modal>
      <Modal
        small={true}
        title={`Вы действительно хотите удалить заявку №${item.id}`}
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
      >
        <button onClick={deleteItem}>Да</button>
      </Modal>
    </Wrapper>
  );
}
