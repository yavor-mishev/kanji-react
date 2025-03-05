import styles from "./NavBarBtn.module.css";
import { NavLink } from "react-router-dom";

export default function NavBarBtn(props) {
  return (
    <NavLink to={props.path}>
      <button>
        <img src={props.src}></img>
      </button>
    </NavLink>
  );
}
