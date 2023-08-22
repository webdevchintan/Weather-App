export const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

export const getWeatherAPI = async () => {
     const weatherApiUrl = `${API_URL}/Calicut%2C%20Kerala/2023-08-23/2023-08-29?unitGroup=metric&key=7WXD3T99FUCFWTRCMHA5WEWH9&contentType=json`;
     try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
}