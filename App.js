import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatScreen from "./src/pages/ChatScreen";
import HomeScreen from "./src/pages/HomeScreen";
import NewsScreen from "./src/pages/NewsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
