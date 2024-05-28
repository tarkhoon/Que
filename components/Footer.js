import React, {memo}  from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export const Footer = memo(({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/footer-icons/Home.png")}
        />

        <Text>Main</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Rec")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/footer-icons/Rec.png")}
        />
        <Text>Wall</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Publish")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/footer-icons/NewPost.png")}
        />
        <Text>Publish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/footer-icons/Profile.png")}
        />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
});
const styles = StyleSheet.create({
  footer: {
    height: 64,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  },
  icon: {
    width: 30,
    height: 30,
  },
});
