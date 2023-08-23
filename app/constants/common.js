export const WEATHER_API_KEY = '7WXD3T99FUCFWTRCMHA5WEWH9';
export const GEO_LOCATION_API_KEY = '3b08a54e6c214673b0d2ea3c552afe6d';

export const WEATHER_API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
export const GEO_LOCATION_API_URL = (lat, long) => `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=${GEO_LOCATION_API_KEY}`;