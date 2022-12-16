import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import data from "../Data/Data";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

export default function Chats() {
  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return (
    <TouchableOpacity>
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
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.chatTextBottom}>
                <Text style={styles.msg}>
                  <Ionicons
                    name="ios-checkmark-done"
                    size={17}
                    color="lightblue"
                  />
                  {item.msg}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </TouchableOpacity>
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
    // alignItems: "center",
    // width: 200,
    width: WIDTH * 0.8,
  },
  title: {
    color: Colors.dark,
    fontSize: 17,
    fontWeight: "bold",
  },
  time: {
    color: Colors.grey,
    fontSize: 13,
  },
  msg: {
    color: Colors.grey,
    fontSize: 15,
    marginLeft: 5,
  },
});
