import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import ImagePicker from "./component/ImagePicker";
import ImageUpload from "./component/ImageUpload";
import { useState } from "react";
import HomePage from "./component/HomePage";
import ResultPage from "./component/ResultPage";
import React from "react";
import { createAppContainer } from "react-navigation";
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from "react-native-paper";
const Stack = createNativeStackNavigator();

export default function App() {

  return (<View style={styles.container}>
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="My Plate" component={ResultPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>

  </View>




  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    padding: "8%",
    alignItems: "flex-start",
    //backgroundColor: "green",
    flex: 2,
    height: 110,
    justifyContent: "space-between",

  },
  containerImage1: {
    // backgroundColor: "red",
  },
  containerImage2: {
    // backgroundColor: "blue",
  },
  stretch: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  upperContainer: {
    padding: "32%",
    // backgroundColor: "pink",
    alignItems: "center",
    flex: 2,
  },
  textCon: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    width: 300,
    paddingTop: 0,
    fontFamily: "Cochin",
    textAlign: "center",

  },
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    height: "20%",
  },
  imageAction: {
    width: 150,
    height: 100,
    resizeMode: "stretch",
  },
  comIm1: { paddingBottom: "20%" },
  downLine: {

    alignItems: "center",

    paddingBottom: 50,

  },
});
