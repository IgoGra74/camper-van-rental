// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
// import css from "./";
// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };
// const Navigation = () => (
//   <div className={css.header}>
//     <NavLink to="/" className={buildLinkClass}>
//       Home
//     </NavLink>
//     <NavLink to="/catalog" className={buildLinkClass}>
//       Catalog
//     </NavLink>
//     <NavLink to="/favorites" className={buildLinkClass}>
//       Favorites
//     </NavLink>
//   </div>
// );

// export default Navigation;
const fetchCampers = async () => {
  try {
    const response = await axios.get(`https://your-mockapi-url.com/adverts`, {
      params: {
        page,
        limit: 4,
        ...filters,
      },
    });
    setCampers((prevCampers) => [...prevCampers, ...response.data]);
  } catch (error) {
    console.error("Ошибка при получении кемперов:", error);
  }
};

const handleFilterChange = (event) => {
  const { name, value, type, checked } = event.target;
  if (type === "checkbox") {
    setFilters((prevFilters) => ({
      ...prevFilters,
      equipment: checked
        ? [...prevFilters.equipment, value]
        : prevFilters.equipment.filter((equip) => equip !== value),
    }));
  } else {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }
};

// Добавьте элементы фильтра в JSX
<div>
  <input
    type="text"
    name="location"
    value={filters.location}
    onChange={handleFilterChange}
    placeholder="Местоположение"
  />
  <input
    type="checkbox"
    name="equipment"
    value="tent"
    checked={filters.equipment.includes("tent")}
    onChange={handleFilterChange}
  />
  Палатка
  <input
    type="checkbox"
    name="equipment"
    value="shower"
    checked={filters.equipment.includes("shower")}
    onChange={handleFilterChange}
  />
  Душ
  <select name="type" value={filters.type} onChange={handleFilterChange}>
    <option value="">Все</option>
    <option value="RV">RV</option>
    <option value="Van">Фургон</option>
    <option value="Trailer">Прицеп</option>
  </select>
</div>;
