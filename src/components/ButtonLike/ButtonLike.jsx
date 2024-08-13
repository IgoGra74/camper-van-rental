import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import css from "./ButtonLike.module.css";
import icons from "../../assets/icons/icons.svg";

const ButtonLike = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item._id === advert._id);
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(advert._id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };
  return (
    <button className={css.button} onClick={handleFavoriteClick}>
      <svg
        className={isFavorite ? css.heartFill : css.heart}
        width="24"
        height="24"
      >
        <use href={`${icons}#icon-heart`} />
      </svg>
    </button>
  );
};

export default ButtonLike;
