import { fetchPlaces } from "../services/foursquareService.js";

const getPizzaShops = async (req, res) => {
  try {
    const { lat = "40.7128", lon = "-74.0060" } = req.query;
    const data = await fetchPlaces("pizza", lat, lon);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pizza shops" });
  }
};

const getJuiceShops = async (req, res) => {
  try {
    const { lat = "40.7128", lon = "-74.0060" } = req.query;
    const data = await fetchPlaces("juice", lat, lon);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch juice shops" });
  }
};

const getComboShops = async (req, res) => {
  try {
    const { lat = "40.7128", lon = "-74.0060" } = req.query;
    const pizzaData = await fetchPlaces("pizza", lat, lon);
    const juiceData = await fetchPlaces("juice", lat, lon);
    res.json([...pizzaData, ...juiceData]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch combo shops" });
  }
};

export { getPizzaShops, getJuiceShops, getComboShops };