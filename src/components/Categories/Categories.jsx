import { categoryIcons } from "../../util/categories-icon";
import css from "./Categories.module.css";

const Categories = ({ advert }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.users} />
          </svg>
          {advert.adults} adults
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.transmission} />
          </svg>
          {advert.transmission}
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.engine} />
          </svg>
          {advert.engine}
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.beds} />
          </svg>
          {advert.details.beds} beds
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.kitchen} />
          </svg>
          {advert.details.kitchen}
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.ac} />
          </svg>
          AC
        </li>
      </ul>
    </div>
  );
};

export default Categories;
