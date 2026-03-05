import axios from "axios";

const BASE_URL = "https://api.the-odds-api.com/v4/sports";

export const fetchOdds = async (sport = "basketball_nba") => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${sport}/odds`,
      {
        params: {
          apiKey: import.meta.env.VITE_ODDS_API_KEY,
          regions: "us",
          markets: "h2h",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching odds:", error);
    throw error;
  }
};