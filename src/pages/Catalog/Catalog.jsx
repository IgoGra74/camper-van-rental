// src/pages/Catalog.js
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCampers, loadMoreCampers } from "../../redux/store";
import CamperCard from "../../components/CamperCard/CamperCard";
import Modal from "../../components/Modal/Modal";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const response = await axios.get(
          `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts/adverts?page=${currentPage}&limit=4`
        );
        dispatch(setCampers(response.data));
      } catch (error) {
        console.error("Error fetching campers:", error);
      }
    };
    fetchCampers();
  }, [dispatch, currentPage]);

  const handleLoadMore = async () => {
    try {
      const response = await axios.get(
        `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts/adverts?page=${
          currentPage + 1
        }&limit=4`
      );
      dispatch(loadMoreCampers(response.data));
    } catch (error) {
      console.error("Error loading more campers:", error);
    }
  };

  return (
    <div>
      <h1>Catalog</h1>
      <ul className="camper-grid">
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
      <Modal />
    </div>
  );
};

export default Catalog;
