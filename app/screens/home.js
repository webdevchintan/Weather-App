import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LottieLoader from '../components/LottieLoader';
import { FlashList } from "@shopify/flash-list";
import moment from 'moment';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    const DATA = [
        {
          title: "First Item",
        },
        {
          title: "Second Item",
        },
      ];
    useEffect(() => {
      const getWeatherData = async () => {
         setLoading(true);
         const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Calicut%2C%20Kerala?unitGroup=metric&key=7WXD3T99FUCFWTRCMHA5WEWH9&contentType=json`;
          try {
            const response = await fetch(weatherApiUrl);
            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
          setLoading(false);
      };
      getWeatherData();
    }, []);
    console.log('weatherData',JSON.stringify(weatherData))
if(loading)
  return (
    <LottieLoader source={require('../assets/animations/loader.json')}/>
  );
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:28, fontFamily:'sans-serif'}} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.address}</Text>
            <Text  style={{fontSize:18, fontWeight:'400', color:'grey', fontFamily:'sans-serif'}}>{moment().format('dddd, hh:mm A')}</Text>
            <View style={{alignItems:'center'}}>
              <Image style={{width:50, height:50}} source={{uri : `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weatherData?.currentConditions?.icon}.png`}}/>
              <Text style={{fontSize:28, fontFamily:'sans-serif'}} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.currentConditions?.temp}&deg;</Text>
              <Text style={{fontSize:18, fontFamily:'sans-serif',color:'grey',}} adjustsFontSizeToFit numberOfLines={1}>{weatherData?.currentConditions?.conditions}</Text>
            </View>
      <Text  style={{fontSize:20, fontFamily:'sans-serif'}}>This week</Text>
      <FlashList
          data={weatherData?.days}
          renderItem={({ item }) => 
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <Text style={{textTransform:'uppercase', width:50}}>{moment(item?.datetime).format('ddd')}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{width:40, marginRight:10}}>{item?.temp}&deg;</Text>
            <Text style={{width:40}}>{item?.dew}&deg;</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30, height:30, marginRight:10}} source={{uri : `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${item?.icon}.png`}}/>
            <Text style={{width:80}} numberOfLines={1}>{item?.conditions}</Text>
            </View>
          </View>
          }
          estimatedItemSize={200}
      />  
     </View>
    );
}

const styles = StyleSheet.create({

});
