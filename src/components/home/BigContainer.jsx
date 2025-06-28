import Filter from "./Filter.jsx";
import AllCards from "../others/AllCards.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";

const BigContainer = ({items}) => {
  return (
    <div className="bigContent mb-4">
      <Filter />
      <AllCards items={items} />
    </div>
  );
};
export default BigContainer;
