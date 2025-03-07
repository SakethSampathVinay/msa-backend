import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const FOURSQUARE_API_URL = "https://api.foursquare.com/v3/places/search";
const API_KEY = "fsq3rD/UCs77PKr3C8ksxI0rxl/SVKIb6tAkK3ATJ6y8phA=";
console.log("API_KEY:", API_KEY);

const fetchPlaces = async (term, lat = "40.7128", lon = "-74.0060") => {
  try {
    console.log(`Fetching places for: ${term} at ${lat},${lon}`); // Debug log

    const response = await axios.get(FOURSQUARE_API_URL, {
      headers: {
        Authorization: API_KEY,
        Accept: "application/json",
      },
      params: {
        query: term,
        ll: `${lat},${lon}`, // Ensure lat,long are passed correctly
        limit: 10,
      },
    });

    console.log("Response Data:", response.data); // Debug log

    return response.data.results.map((place) => ({
      name: place.name,
      address: place.location?.formatted_address || "Address not available",
      rating: typeof place.rating === "number" ? place.rating : null,
      phone: place.tel || "No phone",
    }));
  } catch (error) {
    console.error(
      "Error fetching data from Foursquare:",
      error.response?.data || error.message
    );
    return [];
  }
};

export { fetchPlaces };
