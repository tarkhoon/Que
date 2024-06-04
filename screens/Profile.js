import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {firebase} from '../config';

const numColumns = 3;


const Profile = ({navigation, route}) => {

  const [name,setName]=useState('')
  const [posts, setPosts]=useState('')
useEffect(()=>{
  firebase.firestore().collection('users')
  .doc(firebase.auth().currentUser.uid).get()
  .then((snapshot)=> {
    if(snapshot.exists){
      setName(snapshot.data())
    }else{
      console.log('User dont exists')
    }
  })
})

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={styles.menu}
            source={require("../assets/header-icons/menu.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <View
        style={{ height: 432, backgroundColor: "black" }}
      >
        <View style={styles.profile}>
          <View style={styles.head}>
            <View style={styles.bgFill}>
              <Image
                style={styles.filler}
                source={require("../assets/rec4.png")}
              />
              <Text style={styles.prName}>
                Que 
              </Text>
            </View>

            <View style={styles.desc}>
              <Image
                style={styles.profPic}
                source={require("../assets/footer-icons/Profile.png")}
              />
              <View style={styles.descText}>
                <View>
                  <Text style={styles.usName}>
                    {name.email}
                  </Text>
                </View>
                <View>
                  <Text style={styles.usStatus}>
                    В ресторане
                  </Text>
                </View>
                <View>
                  <Text style={styles.newInfo}>
                    Укажите информацию о себе
                  </Text>
                </View>
                <View style={styles.pubButton}>
                  <Text style={styles.Public}>
                    Опубликовать
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.stats}>
            <View style={styles.statBox}>
              <Text style={styles.stNum}>12</Text>
              <Text style={styles.stText}>Публикации</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.stNum}>276</Text>
              <Text style={styles.stText}>Подписчики</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.stNum}>89</Text>
              <Text style={styles.stText}>Подписки</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.stNum}>13</Text>
              <Text style={styles.stText}>Рестораны</Text>
            </View>
          </View>
        </View>
        <View style={styles.posts}>
          <View style={styles.lent}>
            <FlatList
              numColumns={3}
              data={posts}
              renderItem={({ item }) => (
                <View style={styles.post}>
                  <Image
                    style={styles.postPicture}
                    source={{ uri: item.img }}
                    resizeMode="center"
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
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
          <Text>Camera</Text>
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
    </View>
  );
}
export default Profile
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  profile: {
    height: 380,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "column",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  head: {
    height: 320,
    backgroundColor: "white",
    borderRadius: 24,
  },
  bgFill: {
    height: 136,
  },
  filler: {
    width: 430,
    height: 136,
    backgroundColor: "black",
    resizeMode: "contain",
  },
  prName: {
    position: "absolute",
    fontSize: 28,
    color: "white",
    left: 20,
    top: 10,
  },
  profPic: {
    position: "absolute",
    top: -51,
    left: Dimensions.get("screen").width / 2 - 51,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 51,
  },
  stats: {
    width: "100%",
    height: 72,
    backgroundColor: "white",
    marginTop: 8,
    borderRadius: 24,
    flexDirection: "row",
  },
  descText: {
    flexDirection: "column",
    alignItems: "center",
  },
  usName: {
    fontSize: 24,
    marginTop: 40,
  },
  usStatus: {
    fontSize: 12,
    color: "#59AD58",
    borderWidth: 1,
    borderColor: "#59AD58",
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  newInfo: {
    fontSize: 12,
    marginTop: 8,
    color: "#FF4401",
  },
  Public: {
    color: "#FF4401",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  pubButton: {
    width: Dimensions.get("screen").width - 24,
    height: 40,
    backgroundColor: "#F9E8E1",
    marginTop: 8,
    borderRadius: 8,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
    marginTop: 12,
  },
  stNum: {
    fontSize: 20,
  },
  stText: {
    fontSize: 14,
    color: "#777777",
  },
  posts: {
    height: 24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: "white",
    marginTop: 30,
  },
  tag: {
    textAlign: "center",
    fontSize: 16,
    color: "#FF4401",
    marginTop: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  footer: {
    height: 64,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  menu: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: "contain",
  },
  post: {
    flex: 1,
    backgroundColor: "white",
    margin: 1,
  },
  postPicture: {
    width: "100%",
    height: Dimensions.get("window").width / numColumns,
  },
});
