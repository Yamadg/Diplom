import styles from "./OurCommand.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import CommandItem from "../MainPage/CommandItem/CommandItem";
import employee from "../../assets/employee.png";

function OurCommand() {
  return (
    <Wrapper>
      <section className={styles.command}>
        <h1 className="title">Наша команда</h1>
        <section className={styles.command__items}>
          <CommandItem
            img={employee}
            name={"Дмитрий"}
            vacancy={"Разработчик полного цикла"}
            exp={5}
            amount={2}
          >
            Опытный тимлид со знанием языков программирования: PHP, Python, JavaScript, TypeScript.
          </CommandItem>
          <CommandItem
            img={employee}
            name={"Дмитрий"}
            vacancy={"Разработчик полного цикла"}
            exp={5}
            amount={2}
          >
            Опытный тимлид со знанием языков программирования: PHP, Python, JavaScript, TypeScript.
          </CommandItem>
          <CommandItem
            img={employee}
            name={"Дмитрий"}
            vacancy={"Разработчик полного цикла"}
            exp={5}
            amount={2}
          >
            Опытный тимлид со знанием языков программирования: PHP, Python, JavaScript, TypeScript.
          </CommandItem>
          <CommandItem
            img={employee}
            name={"Дмитрий"}
            vacancy={"Разработчик полного цикла"}
            exp={5}
            amount={2}
          >
            Опытный тимлид со знанием языков программирования: PHP, Python, JavaScript, TypeScript.
          </CommandItem>
        </section>
      </section>
    </Wrapper>
  );
}

export default OurCommand;
