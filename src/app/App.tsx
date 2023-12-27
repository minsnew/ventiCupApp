import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import MyLogScreen from "../screens/MyLogScreen";
import OtherLogScreen from "../screens/OtherLogScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fb8c00",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="MY_LOG"
          options={{
            title: "나의 일상",
            tabBarIcon: ({ color, size }) => (
              <Icon name="book" color={color} size={size} />
            ),
          }}
          component={MyLogScreen}
        />
        <Tab.Screen
          name="OTHER_LOG"
          options={{
            title: "남의 일상",
            tabBarIcon: ({ color, size }) => (
              <Icon name="tago" color={color} size={size} />
            ),
          }}
          component={OtherLogScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
