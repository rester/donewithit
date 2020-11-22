import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppImageInput from "./AppImageInput";

const AppImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
