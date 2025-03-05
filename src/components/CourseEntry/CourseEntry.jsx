import styles from "./CourseEntry.module.css";

export default function CourseEntry(props) {
  return (
    <div className={styles.courseCard} id="quiz">
      <div className={styles.courseCardImg}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.courseInfo}>
        <div className={styles.courseInfoHeader}>
          <h2>{props.title}</h2>
          <h3>1 час и 58 мин</h3>
        </div>
        <div className={styles.courseStats}>
          <div className={styles.stat}>
            <div className={styles.statImgBackground}>
              <img src="src/media/nav-bar-icons/course-icon.svg" alt="" />
            </div>
            <span>
              <strong>2 от 5</strong> лекции
            </span>
          </div>
          <div className={styles.stat}>
            <div className={styles.statImgBackground}>
              <img src="src/media/courses/grade-star-icon.svg" alt="" />
            </div>
            <span>
              <strong>2 от 5</strong> теста
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
