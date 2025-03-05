import kanjiLogo from "/src/media/nav-bar-icons/kanji-icon.svg";
import logoutIcon from "/src/media/nav-bar-icons/logout-icon.svg";
import NavIcons from "./NavBarIcons.js";
import NavBarBtn from "../NavBarBtn/NavBarBtn";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const buttonsOptions = NavIcons.map((icon, index) => (
    <NavBarBtn key={index} src={icon.src} path={icon.to} />
  ));

  return (
    <nav className={styles.navigation}>
      <div>
        <img src={kanjiLogo} />
      </div>

      <div className={styles.options}>{buttonsOptions}</div>

      <div>
        <NavBarBtn src={logoutIcon} />
      </div>
    </nav>
  );
}
