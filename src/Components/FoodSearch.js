import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../config";

const FoodSearch = () => {
  const [food, setFood] = useState("");

  const onChange = (e) => {
    setFood(e.target.value);
  };

  const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=acc6b47d&app_key=%${API_KEY}&ingr=${food}&nutrition-type=cooking`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(API_URL);

    console.log(response.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="search" onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default FoodSearch;
