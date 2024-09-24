import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const data = [
  {
    id: "1",
    header: "Header",
    text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    time: "8m ago",
  },
  {
    id: "2",
    header: "Header",
    text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    time: "8m ago",
  },
  {
    id: "3",
    header: "Header",
    text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    time: "8m ago",
  },
  {
    id: "4",
    header: "Header",
    text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    time: "8m ago",
  },
];

const Feed = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Feed</Text>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Filter</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <FlatList
        data={data}
        keyExtractor={(item: { id: any }) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: "/content", params: { itemId: item.id } })
            }
            style={styles.listItem}
          >
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>{item.header}</Text>
              <Text>{item.text}</Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
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
  searchInput: {
    margin: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eaeaea",
    borderRadius: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#eaeaea",
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
  },
  timeText: {
    color: "#888",
    fontSize: 12,
  },
});

export default Feed;
