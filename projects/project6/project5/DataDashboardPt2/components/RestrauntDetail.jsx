// RestaurantDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries/${id}`
        );
        const json = await response.json();
        if (json) {
          setRestaurantDetails(json);
        } else {
          console.error("Failed to fetch restaurant details");
        }
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  return (
    <div>
      {restaurantDetails ? (
        <div>
          <h2>Restaurant Details</h2>
          <p>Name: {restaurantDetails.name}</p>
          <p>City: {restaurantDetails.city}</p>
          <p>State: {restaurantDetails.state}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading restaurant details...</p>
      )}
    </div>
  );
};

export default RestaurantDetail;
