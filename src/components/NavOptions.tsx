import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
export const NavOptions = () => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`
           w-40 p-2 bg-gray-200 m-2 pl-6 pb-4 mb-3
        `}
        >
          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={tw`font-semibold  text-lg mt-2`}>{item.title}</Text>
            <Icon
              style={tw`bg-black p-2 rounded-full w-10 mt-4`}
              tvParallaxProperties={{}}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
  },
});
