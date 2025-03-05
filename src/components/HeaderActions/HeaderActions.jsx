import styles from "./HeaderActions.module.css";
import notificationsIcon from "../../media/nav-bar-icons/notification-bell-icon.svg";

export default function HeaderActions(props) {
  return (
    <header>
      <span>
        <h1>{props.header}</h1>
      </span>
      <div className={styles.headerActions}>
        <input type="text" placeholder="Search..."></input>
        <button>
          <img src={notificationsIcon} alt="notification bell icon" />
        </button>
        <div className="profile"></div>
      </div>
    </header>
  );
}
