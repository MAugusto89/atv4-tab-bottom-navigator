import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  FontAwesome,
  Entypo,
  Feather,
} from "@expo/vector-icons";

import ToDoScreen from "./src/pages/ToDoScreen";
import NewsScreen from "./src/pages/NewsScreen";
import BookScreen from "./src/pages/BookScreen";
import ProfileScreen from "./src/pages/ChatScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ToDo"
        /*esse screenOptions apaga o cabeçalho em todas as pág */
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: "#80ED99",
          tabBarActiveBackgroundColor: "#57CC99",
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "57CC99",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="ToDo"
          component={ToDoScreen}
          /*esse options apaga o cabeçalho nessa pag options={{headerShown:false}}  */
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="signal" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Book"
          component={BookScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="book" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
