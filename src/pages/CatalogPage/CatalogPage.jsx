import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, loadMore } from "../../redux/advertsSlice.js";
import AdvertCard from "../../components/AdvertCard/AdvertCard.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { useEffect } from "react";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.items);
  const status = useSelector((state) => state.adverts.status);
  const error = useSelector((state) => state.adverts.error);
  const currentPage = useSelector((state) => state.adverts.currentPage);

  useEffect(() => {
    console.log(`Fetching page ${currentPage}`);
    dispatch(fetchAdverts(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    console.log("Loading more...");
    dispatch(loadMore());
  };

  return (
    <div>
      <h1>Camper Catalog</h1>
      {status === "loading" && <Loader />}
      {status === "failed" && <p>{error}</p>}
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>
            <AdvertCard advert={advert} />
          </li>
        ))}
      </ul>

      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default CatalogPage;
