import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import Home from "./pages/home";
import ReviewDetails from "./pages/reviewDetails";
import About from './pages/about';
import Loading from "./pages/loading";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    rubiksemibold: require ("./assets/fonts/Rubik-SemiBold.ttf"),
    rubikbold: require ("./assets/fonts/Rubik-Bold.ttf")
  })
  
  if (!loaded) {
    return <Loading/>;
  } else {
    return (
     <NavigationContainer> 
      <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: 'green' }, headerTintColor: "#fff" }}>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{title: "Book list"}}
        />
        <Stack.Screen 
          name="Review"
          component={ReviewDetails}
          options={{title: "Review Screen"}}
        />
        <Stack.Screen 
          name="About"
          component={About}
          options={{title: "About"}}
        />
      </Stack.Navigator>
     </NavigationContainer> 
      )  ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
