import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import { ScrollView } from "react-native-gesture-handler";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <ScrollView>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me.jpg")}
            title="Marcos Insfran"
            subTitle="5 Listing"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </ScrollView>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  userContainer: {
    marginVertical: 45,
  },
});
