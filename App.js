
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
  container: {
    flex: 1,
    height: "20%",
  },
});
