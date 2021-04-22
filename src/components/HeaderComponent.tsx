import { Typography } from "@material-ui/core";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { Colors } from "../utils/colors";

const HeaderComponent = () => {
  return (
    <Appbar style={styles.container}>
      <Text style={styles.text}>Message Inn</Text>
      <View style={styles.buttons}>
        <IconButton icon="magnify" onPress={() => {}} />
        <IconButton icon="dots-vertical" onPress={() => {}} />
      </View>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 16,
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
  },
});

export default HeaderComponent;
