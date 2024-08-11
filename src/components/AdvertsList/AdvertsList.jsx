import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, loadMore } from "../../redux/advertsSlice";
import AdvertCard from "../AdvertCard/AdvertCard.jsx";
import Loader from "../Loader/Loader.jsx";
import css from "./AdvertsList.module.css";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.items);
  const status = useSelector((state) => state.adverts.status);
  const error = useSelector((state) => state.adverts.error);
  const currentPage = useSelector((state) => state.adverts.currentPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAdverts(currentPage));
    }
  }, [dispatch, currentPage, status]);

  const handleLoadMore = () => {
    dispatch(loadMore());
    dispatch(fetchAdverts(currentPage + 1));
  };
  return (
    <div className={css.container}>
      {status === "loading" && <Loader />}
      {status === "failed" && <p>{error}</p>}
      <ul className={css.list}>
        {adverts.map((advert) => (
          <li key={advert._id} className={css.item}>
            <AdvertCard advert={advert} />
          </li>
        ))}
      </ul>

      <button onClick={handleLoadMore} className={css.button}>
        Load more
      </button>
    </div>
  );
};

export default AdvertsList;
