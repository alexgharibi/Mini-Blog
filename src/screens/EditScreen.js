import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { View, Text, StyleSheet } from "react-native";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>hi {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
