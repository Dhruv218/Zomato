import React from "react";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSections/index";

import Filters from "../common/filters/index";

import "./delivery.css";
import DeliveryColletions from "./deliverycollections/index";
import TopBrands from "./TopBrands/index";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-filter absolute-center iconn"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon:<i className="fa-solid fa-clock-rotate-left absolute-center iconn"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryColletions />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Meerut"
      />
    </div>
  );
};

export default Delivery;
 