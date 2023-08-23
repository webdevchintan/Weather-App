import { Dimensions } from "react-native";

export const getWeatherIcon = (iconName) => `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${iconName}.png`;

export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;
