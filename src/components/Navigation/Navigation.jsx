// src/pages/CatalogPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, loadMore } from "../features/advertsSlice";
import AdvertCard from "../components/AdvertCard";
import Loader from "react-loader-spinner";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.adverts.items);
  const status = useSelector((state) => state.adverts.status);
  const error = useSelector((state) => state.adverts.error);
  const currentPage = useSelector((state) => state.adverts.currentPage);

  const [locationFilter, setLocationFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    dispatch(fetchAdverts(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleEquipmentChange = (e) => {
    const value = e.target.value;
    setEquipmentFilter((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const filteredAdverts = adverts.filter((advert) => {
    const matchesLocation = advert.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const matchesEquipment = equipmentFilter.every((eq) =>
      advert.equipment.includes(eq)
    );
    const matchesType = typeFilter ? advert.type === typeFilter : true;
    return matchesLocation && matchesEquipment && matchesType;
  });

  return (
    <div>
      <h1>Camper Catalog</h1>
      <div>
        <label>
          Location:
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationChange}
            placeholder="Enter location"
          />
        </label>
        <fieldset>
          <legend>Equipment:</legend>
          <label>
            <input
              type="checkbox"
              value="wifi"
              onChange={handleEquipmentChange}
              checked={equipmentFilter.includes("wifi")}
            />
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              value="kitchen"
              onChange={handleEquipmentChange}
              checked={equipmentFilter.includes("kitchen")}
            />
            Kitchen
          </label>
          <label>
            <input
              type="checkbox"
              value="shower"
              onChange={handleEquipmentChange}
              checked={equipmentFilter.includes("shower")}
            />
            Shower
          </label>
        </fieldset>
        <fieldset>
          <legend>Camper Type:</legend>
          <label>
            <input
              type="radio"
              value="standard"
              name="camperType"
              onChange={handleTypeChange}
              checked={typeFilter === "standard"}
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              value="luxury"
              name="camperType"
              onChange={handleTypeChange}
              checked={typeFilter === "luxury"}
            />
            Luxury
          </label>
          <label>
            <input
              type="radio"
              value=""
              name="camperType"
              onChange={handleTypeChange}
              checked={typeFilter === ""}
            />
            All
          </label>
        </fieldset>
      </div>
      {status === "loading" && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      {status === "failed" && <p>{error}</p>}
      <div>
        {filteredAdverts.map((advert) => (
          <AdvertCard key={advert.id} advert={advert} />
        ))}
      </div>
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default CatalogPage;
