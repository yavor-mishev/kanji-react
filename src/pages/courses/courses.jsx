import styles from "./Courses.module.css";
import CourseEntry from "../../components/CourseEntry/CourseEntry";
import courses from "./courses";
import { NavLink } from "react-router-dom";

export default function Courses() {
  const coursesArr = courses.map((item) => (
    <CourseEntry key={item.id} img={item.img} title={item.title} />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "fit-content",
        }}
      >
        <nav>
          <div className={styles.navOptions}>
            <a className={styles.navOpt} id="heragana-opt" href="#">
              Херагана
            </a>

            <a className={styles.navOpt} id="katakana-opt" href="#">
              Катакана
            </a>
            <a className={styles.navOpt} id="kanji-opt" href="#">
              Канджи
            </a>
          </div>
          <div className={styles.displayStyle}>
            <button id="list-style">
              <img src="src/media/courses/list-style-icon.svg" alt="" />
            </button>
            <button id="grid-style">
              <img src="src/media/courses/grid-style-icon.svg" alt="" />
            </button>
          </div>
        </nav>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px 10px",
            height: "430px",
            overflow: "scroll",
          }}
        >
          {coursesArr}
        </div>
      </div>

      <>
        {/* <nav>
        
      </nav>
      <div className="courses-grid">
        <div className="grid-item">
          <div className="grid-item-img">
            <img src="./media/courses/order-food-quiz.svg" alt="" />
          </div>
          <div className="item-info">
            <div className="info-header">
              <h2>Поръчай храна</h2>
              <h3>1 час и 58 мин</h3>
            </div>
            <div className="info">
              <div className="info-stat">
                <div className="img-background">
                  <img src="media/icons/nav-bar-icons/course-icon.svg" alt="" />
                </div>
                <span>
                  <strong>2 от 5</strong> лекции
                </span>
              </div>
              <div className="info-stat">
                <div className="img-background">
                  <img src="media/icons/grade-star-icon.svg" alt="" />
                </div>
                <span>
                  <strong>2 от 5</strong> теста
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-img">
            <img src="./media/courses/order-food-quiz.svg" alt="" />
          </div>
          <div className="item-info">
            <div className="info-header">
              <h2>Поръчай храна</h2>
              <h3>1 час и 58 мин</h3>
            </div>
            <div className="info">
              <div className="info-stat">
                <div className="img-background">
                  <img src="media/icons/nav-bar-icons/course-icon.svg" alt="" />
                </div>
                <span>
                  <strong>2 от 5</strong> лекции
                </span>
              </div>
              <div className="info-stat">
                <div className="img-background">
                  <img src="media/icons/grade-star-icon.svg" alt="" />
                </div>
                <span>
                  <strong>2 от 5</strong> теста
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </>
    </>
  );
}
