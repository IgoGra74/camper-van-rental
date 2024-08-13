import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navbar.module.css";
import logoImg from "../../assets/images/logo.png";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navbar() {
  return (
    <header className={css.header}>
      <Link to="/">
        <img className={css.logo} src={logoImg} alt="" />
      </Link>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
