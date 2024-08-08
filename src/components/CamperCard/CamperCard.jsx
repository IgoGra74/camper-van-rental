// src/components/CamperCard.js

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, setModalCamper } from "../../redux/store";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camper._id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper._id));
  };

  const handleShowMoreClick = () => {
    dispatch(setModalCamper(camper));
  };

  return (
    <div className="camper-card">
      <img src={camper.gallery[0]} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <p>Rating: {camper.rating}</p>
      <button
        onClick={handleFavoriteClick}
        style={{ color: isFavorite ? "red" : "black" }}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <button onClick={handleShowMoreClick}>Show More</button>
    </div>
  );
};

export default CamperCard;
