import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyle from "../config/styles";

const AppImageInput = ({ imageUri, onPress }) => {
  const handlePress = () => {
    if (!imageUri) selectImage();
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
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
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      {!imageUri && (
        <MaterialCommunityIcons
          name={"camera"}
          size={50}
          color={defaultStyle.colors.medium}
        />
      )}
    </TouchableHighlight>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 15,
    height: 100,
    padding: 10,
    overflow: "hidden",
    justifyContent: "center",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
