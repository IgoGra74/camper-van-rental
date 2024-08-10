// src/pages/FavoritesPage.js

import { useSelector } from "react-redux";
import AdvertCard from "../../components/AdvertCard/AdvertCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.map((advert) => (
          <AdvertCard key={advert.id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
