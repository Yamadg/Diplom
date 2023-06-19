import styles from "./OurCommand.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import CommandItem from "../MainPage/CommandItem/CommandItem";
import employee from "../../assets/employee.png";
import emp1 from '../../assets/emp1.jpg'
import emp2 from '../../assets/emp2.jpg'
import emp3 from '../../assets/emp3.jpg'
import emp4 from '../../assets/emp4.jpg'

function OurCommand() {
  return (
    <Wrapper>
      <section className={styles.command}>
        <h1 className="title">Наша команда</h1>
        <section className={styles.command__items}>
          <CommandItem
            img={emp1}
            name={"Елена"}
            vacancy={"Ведущий инженерный специалист"}
            exp={5}
            amount={25}
          >
            Квалификационный аттестат: МС-Э-36-1-9099, срок действия аттестата: 27.06.2017-27.06.2027
          </CommandItem>
          <CommandItem
            img={emp2}
            name={"Юрий"}
            vacancy={"Ведущий связист по электрике"}
            exp={15}
            amount={82}
          >
            С 2004г. по 2015г. работал в Ростовском проектно-изыскательском институте «Кавжелдорпроект» — ОАО «Росжелдорпроект»
          </CommandItem>
          <CommandItem
            img={emp3}
            name={"Дмитрий"}
            vacancy={"Ведущий специалист по направлению: Огранизация строительства"}
            exp={10}
            amount={62}
          >
            Квалификационный аттестат: МС-Э-32-2-5947, срок действия аттестата: 24.06.2015-24.06.2027
          </CommandItem>
          <CommandItem
            img={emp4}
            name={"Людмила"}
            vacancy={"Специалист-архитектор (Эксперт)"}
            exp={9}
            amount={49}
          >
            В 2012 году закончила Ростовский инженерно-строительный институт по специальности «Архитектура».
          </CommandItem>
        </section>
      </section>
    </Wrapper>
  );
}

export default OurCommand;
