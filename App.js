//import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, FlatList, Image, View } from "react-native";
import AppPicker from "./app/components/AppPicker";

import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./app/components/AppButton";
import AppImageInput from "./app/components/AppImageInput";
import AppImageInputList from "./app/components/AppImageInputList";

export default function App() {
  return <ListingEditScreen />;
}
