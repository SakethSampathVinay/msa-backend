// src/graphql/resolvers.js
import { fetchPlaces } from "../services/foursquareService.js";

const resolvers = {
  Query: {
    searchPizza: async () => await fetchPlaces("pizza", "40.7128", "-74.0060"),
    searchJuice: async () => await fetchPlaces("juice", "40.7128", "-74.0060"),
    searchCombo: async () => {
      const pizzaData = await fetchPlaces("pizza", "40.7128", "-74.0060");
      const juiceData = await fetchPlaces("juice", "40.7128", "-74.0060");
      return [...pizzaData, ...juiceData];
    },
  },
};

export default resolvers;
