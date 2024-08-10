// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Главная</Link>
//         </li>
//         <li>
//           <Link to="/catalog">Каталог</Link>
//         </li>
//         <li>
//           <Link to="/favorites">Избранное</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navbar.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navbar() {
  return (
    <div className={css.header}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={buildLinkClass}>
        Favorites
      </NavLink>
    </div>
  );
}

export default Navbar;
