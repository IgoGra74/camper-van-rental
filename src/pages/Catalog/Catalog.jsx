// src/pages/Catalog.js
// import { useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setCampers, loadMoreCampers } from "../../redux/store";
// import CamperCard from "../../components/CamperCard/CamperCard";
// import Modal from "../../components/Modal/Modal";

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const campers = useSelector((state) => state.campers);
//   const currentPage = useSelector((state) => state.currentPage);

//   useEffect(() => {
//     const fetchCampers = async () => {
//       try {
//         const response = await axios.get(
//           `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts/adverts?page=${currentPage}&limit=4`
//         );
//         dispatch(setCampers(response.data));
//       } catch (error) {
//         console.error("Error fetching campers:", error);
//       }
//     };
//     fetchCampers();
//   }, [dispatch, currentPage]);

//   const handleLoadMore = async () => {
//     try {
//       const response = await axios.get(
//         `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts/adverts?page=${
//           currentPage + 1
//         }&limit=4`
//       );
//       dispatch(loadMoreCampers(response.data));
//     } catch (error) {
//       console.error("Error loading more campers:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Catalog</h1>
//       <ul className="camper-grid">
//         {campers.map((camper) => (
//           <li key={camper.id}>
//             <CamperCard camper={camper} />
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleLoadMore}>Load More</button>
//       <Modal />
//     </div>
//   );
// };

// export default Catalog;

// -------     ---------------------------------------------------
// import { useState, useEffect } from "react";
// import axios from "axios";
// import CamperCard from "../../components/CamperCard/CamperCard";

// function Catalog() {
//   const [campers, setCampers] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filters, setFilters] = useState({
//     location: "",
//     equipment: [],
//     type: "",
//   });

//   useEffect(() => {
//     fetchCampers();
//   }, [page, filters]);

//   const fetchCampers = async () => {
//     try {
//       const response = await axios.get(
//         `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts`,
//         {
//           params: {
//             page,
//             limit: 4,
//             ...filters,
//           },
//         }
//       );
//       setCampers((prevCampers) => [...prevCampers, ...response.data]);
//     } catch (error) {
//       console.error("Error fetching campers:", error);
//     }
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleFilterChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     if (type === "checkbox") {
//       setFilters((prevFilters) => ({
//         ...prevFilters,
//         equipment: checked
//           ? [...prevFilters.equipment, value]
//           : prevFilters.equipment.filter((equip) => equip !== value),
//       }));
//     } else {
//       setFilters((prevFilters) => ({
//         ...prevFilters,
//         [name]: value,
//       }));
//     }
//   };
//   return (
//     <div>
//       <h1>Catalog</h1>
//       <div>
//         <input
//           type="text"
//           name="location"
//           value={filters.location}
//           onChange={handleFilterChange}
//           placeholder="Местоположение"
//         />
//         <input
//           type="checkbox"
//           name="equipment"
//           value="tent"
//           checked={filters.equipment.includes("tent")}
//           onChange={handleFilterChange}
//         />
//         <input
//           type="checkbox"
//           name="equipment"
//           value="shower"
//           checked={filters.equipment.includes("shower")}
//           onChange={handleFilterChange}
//         />
//         <select name="type" value={filters.type} onChange={handleFilterChange}>
//           <option value="">Все</option>
//           <option value="RV">RV</option>
//           <option value="Van">Фургон</option>
//           <option value="Trailer">Прицеп</option>
//         </select>
//       </div>
//       ;
//       <div>
//         {campers.map((camper) => (
//           <CamperCard
//             key={camper.id}
//             camper={camper}
//             favorites={favorites}
//             setFavorites={setFavorites}
//           />
//         ))}
//       </div>
//       <button onClick={handleLoadMore}>Load More</button>
//     </div>
//   );
// }

// export default Catalog;
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CamperCard from "../../components/CamperCard/CamperCard";

function Catalog() {
  const [campers, setCampers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });

  const fetchCampers = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://66b54098b5ae2d11eb632a51.mockapi.io/adverts/adverts`,
        {
          params: {
            page,
            limit: 4,
            ...filters,
          },
        }
      );
      setCampers((prevCampers) => [...prevCampers, ...response.data]);
    } catch (error) {
      console.error("Error fetching campers:", error);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchCampers();
  }, [fetchCampers]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        equipment: checked
          ? [...prevFilters.equipment, value]
          : prevFilters.equipment.filter((equip) => equip !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h1>Catalog</h1>

      <div>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Местоположение"
        />
        <label>
          <input
            type="checkbox"
            name="equipment"
            value="tent"
            checked={filters.equipment.includes("tent")}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="equipment"
            value="shower"
            checked={filters.equipment.includes("shower")}
            onChange={handleFilterChange}
          />
        </label>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">Все</option>
          <option value="RV">RV</option>
          <option value="Van">Фургон</option>
          <option value="Trailer">Прицеп</option>
        </select>
      </div>

      <div>
        {campers.map((camper) => (
          <CamperCard
            key={camper.id}
            camper={camper}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default Catalog;
