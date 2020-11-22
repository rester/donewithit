import React, {useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyle from "../config/styles";


const AppImageInput = ({ imageUri, onChangeImage }) => {

  useEffect(() => {
    requestPermission();
  }, [])
  
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      {text: 'Yes', onPress: () => onChangeImage(null)},
      { text: 'No'},
    ])
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log("Error reading a image", error);
    }
  };

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handlePress}
    >
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name={"camera"}
            size={50}
            color={defaultStyle.colors.medium}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
      </View>
    </TouchableHighlight>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
