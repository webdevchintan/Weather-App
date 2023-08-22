import { WEATHER_API_KEY } from "../constants/common";

export const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

export const getWeatherAPI = async () => {
     const weatherApiUrl = `${API_URL}/Calicut%2C%20Kerala/2023-08-23/2023-08-29?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`;
     try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
}