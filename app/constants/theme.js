import { Platform } from "react-native";

export const fontFamily  = Platform.OS === 'android' ? 'Roboto' : 'Futura';
export const fontStyle = {
    font_48:{
        fontSize:48, 
        fontFamily:fontFamily
    },
    font_40:{
        fontSize:40, 
        fontFamily:fontFamily
    },
    font_28:{
        fontSize:28, 
        fontFamily:fontFamily
    },
    font_18:{
        fontSize:18, 
        fontFamily:fontFamily
    },
    font_20:{
        fontSize:20, 
        fontFamily:fontFamily
    },
    font_24:{
        fontSize:24, 
        fontFamily:fontFamily
    }
};