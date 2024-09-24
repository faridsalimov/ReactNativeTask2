import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "expo-router";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{ title: "Feed", headerShown: false }}
      />
      <Tabs.Screen
        name="content"
        options={{ title: "Content", headerShown: false }}
      />
    </Tabs>
  );
}
