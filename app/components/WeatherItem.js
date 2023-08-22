import { StyleSheet } from "react-native";
import { View,Text, Image } from "react-native"
import { colors } from "../constants/colors";
import { getWeatherIcon } from "../utils/helper";
import moment from 'moment';

export default WeatherItem  = ({item}) => {
    return (
        <View style={styles.listContainer}>
        <Text style={[styles.dayName]}>{moment(item?.datetime).format('ddd')}</Text>
        <View style={styles.commonSection}>
          <Text style={styles.temperatureText}>{item?.temp}&deg;</Text>
          <Text style={styles.dewText}>{item?.dew}&deg;</Text>
        </View>
        <View style={styles.commonSection}>
          <Image style={styles.weatherIcon} source={{ uri: getWeatherIcon(item?.icon) }} />
          <Text style={styles.weatherCondition} numberOfLines={1}>{item?.conditions}</Text>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    listContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10
    },
    dayName: {
      textTransform: 'uppercase',
      width: 50,
      color: colors.grey,
    },
    commonSection: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    temperatureText: {
      color: colors.black,
      fontWeight: '500',
      marginRight: 10
    },
    dewText: {
      width: 40,
      color: colors.grey
    },
    weatherIcon: {
      width: 30,
      height: 30,
      marginRight: 10
    },
    weatherCondition: {
      width: 80,
      color: colors.grey
    }
  });
  