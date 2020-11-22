import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
    width: "33%",
  },
  label: {
    paddingTop: 5,
    textAlign: "center",
  },
});
