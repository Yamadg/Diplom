import MySlider from "../MainPage/MySlider/MySlider";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./AboutUs.module.scss";
import cube from "../../assets/cube.png";
import sett from "../../assets/sett.png";
import bg from "../../assets/fonstroyka.png";
import Question from "../Question/Question";

export default function AboutUs() {
  return (
    <Wrapper>
      <MySlider />
      <section className={styles.about__us}>
        <h1 className="title">О нас</h1>
        <p className={styles.about__us_content}>
          Также как перспективное планирование создаёт необходимость включения
          в производственный план целого ряда внеочередных мероприятий с учётом
          комплекса экспериментов, поражающих по своей масштабности
          и грандиозности. А также диаграммы связей могут быть описаны
          максимально подробно. Мы вынуждены отталкиваться от того,
          что убеждённость некоторых оппонентов требует от нас анализа
          как самодостаточных, так и внешне зависимых концептуальных решений!
          Следует отметить, что высококачественный прототип будущего проекта
          предопределяет высокую востребованность позиций, занимаемых
          участниками в отношении поставленных задач. Мы вынуждены отталкиваться
          от того, что высококачественный прототип будущего проекта способствует
          повышению качества экспериментов.
        </p>
        <section className={styles.about__us_info}>
          <div className={styles.about__us_info_image}>
            <img src={bg} alt="" />
          </div>
          <div className={styles.about__us_info_right}>
            <div className={styles.about__us_info_right__item}>
              <img src="" alt="" />
              <div className={styles.right__content}>
                <div className={styles.right__content__item}>
                  <div className={styles.content__img}>
                    <img src={cube} alt="" />
                  </div>
                  <div>
                    <h3>Консультация с широким активом</h3>
                    <p className={styles.content__text}>
                      А также свежий взгляд на привычные вещи — безусловно
                      открывает новые горизонты для как самодостаточных,
                      так и внешне зависимых концептуальных решений
                    </p>
                  </div>
                </div>
                <div className={styles.right__content__item}>
                  <div className={styles.content__img}>
                    <img src={sett} alt="" />
                  </div>
                  <div>
                    <h3>Консультация с широким активом</h3>
                    <p className={styles.content__text}>
                      А также свежий взгляд на привычные вещи — безусловно
                      открывает новые горизонты для как самодостаточных,
                      так и внешне зависимых концептуальных решений
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.about__us_questions}>
          <h3>Часто задаваемые вопросы</h3>
          <section className={styles.about__us_questions__content}>
            <Question title="Из чего формируется конечная стоимость проекта?">
              <span>
                Являясь всего лишь частью общей картины, непосредственные
                участники технического прогресса призывают нас  к новым
                свершениям, которые, в свою очередь, должны быть своевременно
                верифицированы. Но высококачественный прототип будущего проекта
                является качественно новой ступенью первоочередных требований.
                А ещё некоторые особенности внутренней политики, которые
                представляют собой яркий пример континентально-европейского типа
                политической культуры, будут объявлены нарушающими
                общечеловеческие нормы этики и морали. И нет сомнений, что явные
                признаки победы институционализации призывают нас к новым
                свершениям, которые, в свою очередь, должны быть указаны
                как претенденты на роль ключевых факторов.
              </span>
            </Question>
            <Question title="У меня есть свой проект. Сможем ли мы его доработать / реализовать?"></Question>
            <Question title="Я выбираю между разными компаниями. В чём ваше отличие?"></Question>
            <Question title="Могу ли я делегировать вам работу / согласование с подрядчиком / организацией?"></Question>
            <Question title="Могу ли я вернуть деньги на каком-либо из этапов работ?"></Question>
          </section>
        </section> */}
        <p className={styles.about__us_content}>
        К услугам наших заказчиков – современное оборудование, качественные строительные материалы, обширный опыт наших сотрудников и индивидуальный подход к нуждам каждого клиента. Мы предлагаем вам лучшее из возможного, ориентируясь на бюджет клиента, и всегда готовы пойти навстречу в решении любых вопросов, связанных со строительством. Мы стараемся сделать окружающий мир лучше, а каждый дом – более уютным и комфортабельным. Наша главная задача – дарить людям тепло и красоту, создавая атмосферу уюта и комфорта.
        </p>
      </section>
    </Wrapper>
  );
}
