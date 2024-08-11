import css from "./ReviewsLocationInfo.module.css";
import icons from "../../assets/icons.svg";
const ReviewsLocationInfo = ({ advert }) => {
  return (
    <div className={css.container}>
      <div className={css.button}>
        <svg className={css.star} width="16" height="16">
          <use href={`${icons}#icon-Rating`} />
        </svg>
        {advert.rating} ({advert.reviews.length} Reviews)
      </div>
      <div className={css.location}>
        <svg className={css.locationIcon} width="16" height="16">
          <use href={`${icons}#icon-map-pin`} />
        </svg>
        <p>{advert.location}</p>
      </div>
    </div>
  );
};

export default ReviewsLocationInfo;
