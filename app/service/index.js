import moment from "moment";
import { GEO_LOCATION_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from "../constants/common";



export const todayDate = moment().format('YYYY-MM-DD');
export const sevenDayDate = moment().add(6,'d').format('YYYY-MM-DD');

// Open API for Get Weather information
export const getWeatherAPI = async (location) => {
     const weatherApiUrl = `${WEATHER_API_URL}/${location}/${todayDate}/${sevenDayDate}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`;
     try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
}

// Open API to get Reverse Geo Location(Lat Long to Address);
export const getAddressFromLatLong = async ({lat,long}) => {
  const geoLocationApiUrl = GEO_LOCATION_API_URL(lat,long);
  try {
     const response = await fetch(geoLocationApiUrl);
     const data = await response.json();
     const result = data?.results[0];
     const formattedAddress = `${result?.city},${result?.country}`
     return formattedAddress;
   } catch (error) {
     console.error("Error fetching weather data:", error);
   }
}