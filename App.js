import React, { useEffect, useState } from "react";

import Rec from "./screens/Rec";

import Profile from "./screens/Profile";
import Photo from "./screens/Photo";
import Publish from "./screens/Publishing";
import Main from "./screens/Main";

import Login from "./screens/Login";
import Reg from "./screens/Registration";

import {firebase} from "./config";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();



function App(){

  const [stories, setStories] = useState([
    {
      name: "#Que",
      key: "1",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
    {
      name: "#Que",
      key: "2",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
    {
      name: "#Que",
      key: "3",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
    {
      name: "#Que",
      key: "4",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
    {
      name: "#Que",
      key: "5",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
    {
      name: "#Que",
      key: "6",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png",
    },
  ]);
  const [posts, setPosts] = useState([
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "1",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "2",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "3",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "4",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "5",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "6",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "7",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "8",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "9",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "10",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "12",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "13",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "14",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "15",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
    {
      name: "Que",
      restaurant_name: "#QueRestaurant",
      grade: "5",
      text: "Бизнес-модель",
      key: "16",
      img: "https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png",
      pic: "https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png",
      likes: "100",
      comments: "5",
      saves: "80",
    },
  ]);

  const [initializing, setInitializing]=useState(true);
  const [user,setUser] = useState();
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }


  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if(initializing) return null;

  if(!user){
    
    return(
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Авторизация",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -168,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Reg}
          options={{
            title: "Регистрация",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -168,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
      </Stack.Navigator>
    )
  }
  return(

  <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          initialParams={{ storie: stories, post: posts }}
          options={{
            title: "Главная",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -168,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
        <Stack.Screen
          name="Publish"
          component={Publish}
          initialParams={{user: user}}
          options={{
            title: "Публикация",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -168,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          initialParams={{ post: posts }}
          options={{
            title: "Профиль",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -168,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
        <Stack.Screen
          name="Rec"
          component={Rec}
          initialParams={{ post: posts,user:user }}
          options={{
            title: "Рекомендации",
            headerTitleStyle: {
              fontSize: 28,
              marginLeft: -128,
              marginBottom: 10,
            },
            headerLeft: () => null,
            gesturesEnabled: false,
          }}
        />
      </Stack.Navigator>
    )
}


export default () => {
  return(
  <NavigationContainer>
    <App/>
    
  </NavigationContainer>
  )
}
