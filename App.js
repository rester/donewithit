//import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { FlatList, Image, View } from "react-native";
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

export default function App() {
  const [imageUri, setImageUri] = useState();
  const [arrayImageUri, setArrayImageUri] = useState([]);

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        console.log("oi");
        var newId =
          arrayImageUri.length == 0
            ? 1
            : arrayImageUri[arrayImageUri.length - 1].id + 1;
        console.log(newId);
        var newItem = { id: newId, uri: result.uri };
        setArrayImageUri([...arrayImageUri, newItem]);
      }
    } catch (error) {
      console.log("Error reading a image", error);
    }
  };

  return (
    <Screen style={{ justifyContents: "flex-start" }}>
      <AppImageInput onPress={selectImage} />
    </Screen>
  );
}
