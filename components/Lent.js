import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import Button from '../components/button';
import Image from 'react-native-image-auto-height';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
export default function Lent() {
  let [posts, setPosts] = useState(null);

  function getData(){
    const data = axios.get('http://158.160.66.30:4000/photo')
    data.then(res => {
      setPosts(res.data);
      console.log(posts)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  function onEndReached(){
    getData()
    PushNotificationIOS.addNotificationRequest({title: "fdsf"})
    console.log("reload")
  }

  return (
    <View style={styles.lent}>
      <FlatList
        onScrollEndDrag={onEndReached}
        data={ posts? posts : null}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image
                style={styles.postPic}
                source={{ uri: item.img_uri }}
              />
              <View style={styles.pHeaderText}>
                <Text style={styles.pHName}>
                  {item.username}
                </Text>
                <Text style={styles.pHRName}>
                  {item.restaurant_name}
                </Text>
              </View>
            </View>
            <View >
            <Image
              style={styles.postPicture}
              source={{ uri: item.img_uri }}
              resizeMode="center"
            />
            
            </View>
            <View style={styles.rate}>
                <Button  
                    icon="star" 
                    color= {item.rate> 0? 'orange':'black'}
                   
                /> 
                <Button  
                    icon="star" 
                    color= {item.rate> 1? 'orange':'black'}
             
                /> 
                <Button  
                    icon="star" 
                    color= {item.rate> 2? 'orange':'black'}
                  
                /> 
                <Button  
                    icon="star" 
                    color= {item.rate> 3? 'orange':'black'}
                 
                /> 
                <Button  
                    icon="star" 
                    color= {item.rate> 4? 'orange':'black'}
                   
                /> 
                </View>

            <View style={styles.postCaption}>
              <View
                style={{ flex: 1, flexDirection: "row" }}
              >
                <View style={styles.likes}>
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("../assets/likePic.png")}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    {item.likes}
                  </Text>
                </View>

                <View style={styles.comms}>
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require("../assets/comPic.png")}
                  />
                  <Text style={{ marginLeft: 8 }}>
                    {item.comms}
                  </Text>
                </View>
              </View>

              <View style={styles.saves}>
                <Image
                  style={{ width: 16, height: 16 }}
                  source={require("../assets/savePic.png")}
                />
                <Text style={{ marginLeft: 8 }}>
                  {item.saves}
                </Text>
              </View>
            </View>

            <View style={styles.postText}>
              <Text style={{fontWeight:'bold' }}>
                {item.username}
              </Text>

              <Text
                style={{  marginTop: 5 }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  lent: {
    flex: 1,
    marginTop: 8,
    marginBottom:60,
    backgroundColor: "#DBDBDB",
  },
  post: {
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: "white",
    marginVertical: 8,
    alignItems:'center',
    marginHorizontal:5
  },
  postHeader: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  postPic: {
    width: 40,
    height: 40,
    marginLeft: 12,
    borderRadius: 20,
  },
  pHeaderText: {
    marginLeft: 8,
    flexDirection: "column",
  },
  pHName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  pHRName: {
    fontSize: 14
  },
  postPicture: {
    width: Dimensions.get('window').width-10,
    height: 'auto',
  },
  postCaption: {
    height: 56,
    marginTop: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    
  },
  postText: {
    marginLeft: 12,
    fontSize: 14,
    paddingBottom: 15,
    width:Dimensions.get('window').width-36
  },
  likes: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: "row",
    height: 32,
  },
  comms: {
    marginLeft: 12,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: "row",
    height: 32,
  },
  saves: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 16,
    height: 32,
    flexDirection: "row",
  },
  rate:{
    marginTop: 5, 
    flexDirection:"row", 
    justifyContent:'space-between', 
    paddingHorizontal:50
  },
});
