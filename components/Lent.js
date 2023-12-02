import React ,{useState} from 'react';

import { StyleSheet, Text,  View, TouchableOpacity,Image,FlatList, Dimensions} from 'react-native';

import * as Font from 'expo-font';





export default function Lent(post) {
    const [posts, setPosts] = useState(Object.values(post)[0]);
return (
      
  
        <View style={styles.lent}>
          <FlatList data={posts} renderItem={({item}) => (
            <View style={styles.post}>
              
              <View style={styles.postHeader}>
                <Image style={styles.postPic} source={{uri:item.pic}}/>
                <View style={styles.pHeaderText}>
                  <Text style={styles.pHName}>{item.name}</Text>
                  <Text style={styles.pHRName}>{item.restaurant_name}</Text>
                </View>
                
              </View>
              
              <Image  style={styles.postPicture} source={{uri:item.img}} resizeMode='center'/>
              
              <View style={styles.postCaption}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={styles.likes}>
                        <Image style={{width:16,height:16}} source={require('../assets/likePic.png')}/>
                        <Text style={{marginLeft:8}}>{item.likes}</Text>
                    </View>

                    <View style={styles.comms}>
                        <Image style={{width:16,height:16}} source={require('../assets/comPic.png')}/>
                        <Text style={{marginLeft:8}}>{item.comms}</Text>
                    </View>

                </View>
                
                <View style={styles.saves}>
                    <Image style={{width:16,height:16}} source={require('../assets/savePic.png')}/>
                    <Text style={{marginLeft:8}}>{item.saves}</Text>
                </View>

                
              </View>
              
              <View style={styles.postText}>
              
                <Text style={{fontFamily:'mp-b'}}>
                  {item.name}
                </Text>
  
                <Text style={{fontFamily:'mp-m',marginTop:5}}>
                  {item.text}
                </Text>
  
              </View>
  
            </View>
          )}/>
        </View>
  
  
  
);

}

const styles = StyleSheet.create({
 
lent:{
    flex:1,
    marginTop:8,
    backgroundColor:'#DBDBDB'
},
post:{
  width:'100%',
  height:630,
  borderRadius:20,
  flexDirection:'column',
  backgroundColor:'white',
  marginVertical:8
},
postHeader:{
  width: '100%',
  height: 60,
  flexDirection:'row',
  alignItems:'center',
 
  borderTopLeftRadius:20,
  borderTopRightRadius:20
}, 
postPic:{
  width: 40,
  height: 40,
  marginLeft:12,
  borderRadius:20
}, 
pHeaderText:{
  marginLeft: 8,
  flexDirection:'column'
},
pHName:{
  fontFamily:'mp-b',
  fontSize:14
}, 
pHRName:{
  fontFamily:'mp-m',
  fontSize:14
}, 
postPicture:{
  width: Dimensions.get('screen').width,
  height: 430
}, 
postCaption:{
  height:56,
  marginTop:8,
  paddingHorizontal:12,
  flexDirection:'row',
  alignItems:'center',
}, 
postText:{
  marginLeft:12,
  fontFamily:'mp-m',
  fontSize:14,
},
likes:{
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    paddingHorizontal:12,
    borderRadius:16,
    flexDirection:'row',
    height:32
},
comms:{
    marginLeft:12,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    paddingHorizontal:12,
    borderRadius:16,
    flexDirection:'row',
    height:32
},
saves:{
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    paddingHorizontal:12,
    borderRadius:16,
    height:32,
    flexDirection:'row'
}

});
