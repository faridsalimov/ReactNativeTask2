import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const Content = () => {
  const router = useRouter();
  const { itemId } = useLocalSearchParams();

  const item = {
    id: itemId,
    header: "Header",
    text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    time: "8m ago",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Content</Text>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.largeAvatar} />
        <View style={styles.textContent}>
          <Text style={styles.headerText}>{item.header}</Text>
          <Text>{item.text}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  backButton: {
    color: "green",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterButton: {
    color: "green",
  },
  contentContainer: {
    padding: 16,
  },
  largeAvatar: {
    width: "100%",
    height: 200,
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    marginBottom: 16,
  },
  textContent: {
    paddingHorizontal: 16,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  timeText: {
    color: "#888",
    fontSize: 12,
    marginTop: 8,
  },
});

export default Content;
