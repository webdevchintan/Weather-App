import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import LottieLoader from './components/LottieLoader';

export default SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/screens/home');
    }, 3000);
  }, []);

  return (
    <LottieLoader 
      source={require('./assets/animations/spalsh.json')}  
      style={styles.lottieStyle}
    />
  );
}

const styles = StyleSheet.create({
  lottieStyle: {
      height:'100%',
      backgroundColor: '#3a92da85',
  }
});
