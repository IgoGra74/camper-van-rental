import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToFavorites,
//   removeFromFavorites,
// } from "../../redux/favoritesSlice.js";
import CamperModal from "../Modal/Modal.jsx";
import css from "./AdvertCard.module.css";
import Categories from "../Categories/Categories.jsx";
import ReviewsLocationInfo from "../ReviewsLocationInfo/ReviewsLocationInfo.jsx";
import ButtonLike from "../ButtonLike/ButtonLike.jsx";

const AdvertCard = ({ advert }) => {
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const isFavorite = favorites.some((item) => item._id === advert._id);

  // const handleFavoriteClick = () => {
  //   if (isFavorite) {
  //     dispatch(removeFromFavorites(advert._id));
  //   } else {
  //     dispatch(addToFavorites(advert));
  //   }
  // };

  return (
    <div className={css.card}>
      <div>
        <img className={css.img} src={advert.gallery[0]} alt={advert.name} />
      </div>
      <div className={css.container}>
        <div className={css.info}>
          <div className={css.infoPrice}>
            <p className={css.name}>{advert.name}</p>
            <div className={css.like}>
              <p className={css.price}>
                €{" "}
                {advert.price.toLocaleString("uk-UA", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <ButtonLike advert={advert} />
            </div>
          </div>
          <ReviewsLocationInfo advert={advert} />
        </div>
        <p className={css.description}>{advert.description}</p>
        <Categories advert={advert} />
        <button className={css.buttonMore} onClick={() => setIsModalOpen(true)}>
          Show more
        </button>
      </div>

      <CamperModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        camper={advert}
      />
    </div>
  );
};

export default AdvertCard;
