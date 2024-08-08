// src/pages/Favorites.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CamperCard from "../../components/CamperCard/CamperCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const fetchFavoriteCampers = async () => {
      const promises = favorites.map((id) =>
        axios.get(`https://your-mockapi-url.com/advert/${id}`)
      );
      const results = await Promise.all(promises);
      setFavoriteCampers(results.map((res) => res.data));
    };
    fetchFavoriteCampers();
  }, [favorites]);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="camper-grid">
        {favoriteCampers.map((camper) => (
          <CamperCard key={camper._id} camper={camper} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
