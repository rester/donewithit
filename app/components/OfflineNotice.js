import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const OfflineNotice = (props) => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
    elevation: Platform.OS === "android" ? 50 : 0,
  },

  text: {
    color: colors.white,
  },
});
