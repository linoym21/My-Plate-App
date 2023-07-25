
import { StyleSheet, View, } from "react-native";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
    flex: 2,
    height: 110,
    justifyContent: "space-between",
  },
  stretch: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  upperContainer: {
    padding: "32%",
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
