// src/components/CamperCard.js

// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite, setModalCamper } from "../../redux/store";

// const CamperCard = ({ camper }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites);
//   const isFavorite = favorites.includes(camper.id);

//   const handleFavoriteClick = () => {
//     dispatch(toggleFavorite(camper.id));
//   };

//   const handleShowMoreClick = () => {
//     dispatch(setModalCamper(camper));
//   };

//   return (
//     <div className="camper-card">
//       <img src={camper.gallery[0]} alt={camper.name} />
//       <h3>{camper.name}</h3>
//       <p>Price: {camper.price.toFixed(2)}</p>
//       <p>Rating: {camper.rating}</p>
//       <button
//         onClick={handleFavoriteClick}
//         style={{ color: isFavorite ? "red" : "black" }}
//       >
//         {isFavorite ? "♥" : "♡"}
//       </button>
//       <button onClick={handleShowMoreClick}>Show More</button>
//     </div>
//   );
// };

// export default CamperCard;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice.js";

function CamperCard({ camper, favorites, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(favorites.includes(camper.id));
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
      setFavorites(favorites.filter((fav) => fav !== camper.id));
    } else {
      dispatch(addFavorite(camper.id));
      setFavorites([...favorites, camper.id]);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="camper-card">
      <h2>{camper.name}</h2>
      <p>Price: {camper.price.toFixed(2)}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
      <button>Show More</button>
    </div>
  );
}

export default CamperCard;
