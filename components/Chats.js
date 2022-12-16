import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import data from "../Data/Data";

const WIDTH = Dimensions.get("window").width;

export default function Chats() {
  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.chatContainer}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 50,
            }}
            source={{ uri: item.image }}
          />

          <View style={styles.chatTextContainer}>
            <View style={styles.chatTextTop}>
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
            <View style={styles.chatTextBottom}>
              <Text>{item.msg}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    // alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  chatTextContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  chatTextTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WIDTH * 0.8,
  },
  chatTextBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: 200,
    width: WIDTH * 0.8,
  },
});
