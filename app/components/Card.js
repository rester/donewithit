import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
