import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
