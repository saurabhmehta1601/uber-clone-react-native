import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { NavOptions } from "../components/NavOptions";

export const HomeScreen = () => {
  return (
    <View style={tw`p-5`}>
      <Image
        style={styles.image}
        source={{
          uri: "https://links.papareact.com/gzs",
        }}
      />
      <NavOptions />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
