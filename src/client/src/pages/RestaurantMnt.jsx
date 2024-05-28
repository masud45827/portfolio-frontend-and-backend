import React from "react";
import restaurants from "../assets/restaurants.png";
const RestaurantMnt = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl  font-bold text-gray-800">
          Project Name: Restaurant management
        </h1>
        <p className="text-lg text-gray-600">
          Technologies Used: PHP,JAVASCRIPT,HTML,CSS
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={restaurants}
          alt="online shop"
          className="w-3/4 rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default RestaurantMnt;
