import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LottieLoader from '../components/LottieLoader';
import { FlashList } from "@shopify/flash-list";
import moment from 'moment';
import { fontStyle } from '../constants/theme';
import { colors } from '../constants/colors';
import { getWeatherIcon } from '../utils/helper';
import Ionicons from '@expo/vector-icons/Ionicons';
import WeatherItem from '../components/WeatherItem';
import { getWeatherAPI } from '../service';

export default Home = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData();
  }, []);

  // api call for weather
  const getWeatherData = async () => {
    setLoading(true);
    try {
      const data = await getWeatherAPI();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  };

  // Loader until Data fetched
  if (loading)
  return (
      <LottieLoader source={require('../assets/animations/loader.json')} />
  );

// Current Weather Component 
const CurrentWeather = () => {
  return (
    <View style={styles.currentCondition}>
      <Image style={styles.currentIcon} source={{ uri: getWeatherIcon(weatherData?.currentConditions?.icon) }} />
      <Text style={styles.currentTemp} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.currentConditions?.temp}&deg;</Text>
      <Text style={styles.currentConditionText} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.currentConditions?.conditions}</Text>
  </View>
  )
} 

// Main Render
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <View>
          <Text style={fontStyle.font_28} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.address}</Text>
          <Text style={styles.currentTime}>{moment().format('dddd, hh:mm A')}</Text>
        </View>
      <TouchableOpacity onPress={() => alert('menu press')}><Ionicons name="filter" size={32} color={colors.grey} /></TouchableOpacity>  
      </View>
      <CurrentWeather />
      <View style={styles.weeklyContainer}>
        <Text style={styles.weekTitle}>This Week</Text>
        <FlashList
          data={weatherData?.days}
          renderItem={({ item }) => <WeatherItem item={item} />}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 10
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  currentTime: {
    ...fontStyle.font_18,
    color: colors.grey
  },
  currentCondition: {
    alignItems: 'center',
    marginVertical: 30,
  },
  currentIcon: {
    width: 70,
    height: 70,
    resizeMode: 'cover'
  },
  currentTemp: {
    ...fontStyle.font_48,
    marginVertical: 10,
    fontWeight: '700'
  },
  currentConditionText: {
    ...fontStyle.font_20,
    color: colors.grey,
    fontWeight: '600'
  },
  weeklyContainer: {
    backgroundColor: colors.lightGrey,
    height: 420,
    // flexGrow:1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  weekTitle: {
    ...fontStyle.font_20,
    fontWeight: '600',
    marginVertical: 5
  }
});
