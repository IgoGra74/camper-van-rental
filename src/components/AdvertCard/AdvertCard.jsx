import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice.js";
import CamperModal from "../Modal/Modal.jsx";

const AdvertCard = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favorites.some((item) => item.id === advert.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <div className="advert-card">
      <h2>{advert.name}</h2>
      <p>Price: {advert.price.toFixed(2)}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={() => setIsModalOpen(true)}>Show more</button>
      <CamperModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        camper={advert}
      />
    </div>
  );
};

export default AdvertCard;
