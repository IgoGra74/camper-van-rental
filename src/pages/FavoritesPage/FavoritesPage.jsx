import { useSelector } from "react-redux";
import AdvertCard from "../../components/AdvertCard/AdvertCard.jsx";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((advert) => (
          <li key={advert._id}>
            <AdvertCard advert={advert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
