import React, { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import { fetchCampers } from "../../services/campers-api.js";

const CatalogPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCampers();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <CampersList items={items} />
    </div>
  );
};

export default CatalogPage;
