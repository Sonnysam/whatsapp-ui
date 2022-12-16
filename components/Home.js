import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.items}>
          <View>
            <Text style={styles.text}>WhatsApp</Text>
          </View>
          <View style={styles.icons}>
            <Feather
              name="camera"
              size={20}
              color="white"
              style={{ marginRight: 12 }}
            />
            <Feather
              name="search"
              size={20}
              color="white"
              style={{ marginRight: 12 }}
            />
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "12%",
    backgroundColor: Colors.primary,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12%",
    marginHorizontal: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.white,
  },
  icons: {
    flexDirection: "row",
  },
});
