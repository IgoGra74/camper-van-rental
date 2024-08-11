import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import css from "./ButtonLike.module.css";
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
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default ButtonLike;
