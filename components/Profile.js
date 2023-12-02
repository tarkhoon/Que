import React ,{useState} from 'react';

import { StyleSheet, Text,  View, TouchableOpacity,Image,FlatList, Dimensions} from 'react-native';

import * as Font from 'expo-font';





export default function Profile(post) {
    const [posts, setPosts] = useState(Object.values(post)[0]);
return (
      
        <View style={{height:432,backgroundColor:'black'}}>
        <View style={styles.profile}>
            <View style={styles.head}>

                <View style={styles.bgFill}>
                <Image style={styles.filler} source={require('../assets/rec4.png')}/>
                    <Text style={styles.prName}>
                        Que {"\n"}
                        (designed by Darina Tagrova)
                    </Text>

                </View>

                <View style={styles.desc}>
                    <Image style={styles.profPic} source={require('../assets/footer-icons/Profile.png')}/>
                    <View style={styles.descText}>
                        <View>
                            <Text style={styles.usName}>
                                404 Team
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
                    <Text style={styles.stNum}>
                        12
                    </Text>
                    <Text style={styles.stText}>
                        Публикации
                    </Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.stNum}>
                        276
                    </Text>
                    <Text style={styles.stText}>
                        Подписчики
                    </Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.stNum}>
                        89
                    </Text>
                    <Text style={styles.stText}>
                        Подписки
                    </Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.stNum}>
                        13
                    </Text>
                    <Text style={styles.stText}>
                        Рестораны
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.posts}>
           

        </View>
      
        </View>

  
  
);

}

const styles = StyleSheet.create({
 profile:{
    height: 380,
    width:'100%',
    backgroundColor:'black',
    flexDirection:'column',
    borderBottomLeftRadius:24,
    borderBottomRightRadius:24
 },
 head:{
    height:320,
    backgroundColor:'white',
    borderRadius:24
 },
 bgFill:{
    height:136
 },
 filler:{
    width:430,
    height: 136,
    backgroundColor:'black',
    resizeMode:'contain'
 },
 prName:{
    position:'absolute',
    fontFamily:'mp-eb',
    fontSize:28,
    color:'white',
    left:20,
    top:10
 },
 profPic:{
    position:'absolute',
    top:-51,
    left:Dimensions.get('screen').width/2-51,
    borderWidth:5,
    borderColor:'white',
    borderRadius:51
 },
 stats:{
    width:'100%',
    height:72,
    backgroundColor:'white',
    marginTop:8,
    borderRadius:24,
    flexDirection:'row'
 },
 descText:{
    flexDirection:'column',
    alignItems:'center'
 },
 usName:{
    fontFamily:'mp-b',
    fontSize:24,
    marginTop:40
 },
 usStatus:{
    fontFamily:'mp-b',
    fontSize:12,
    color:'#59AD58',
    borderWidth:1,
    borderColor:'#59AD58',
    borderRadius:4,
    paddingHorizontal: 15,
    paddingVertical:2
 },
 newInfo:{
    fontFamily:'mp-m',
    fontSize:12,
    marginTop:8,
    color:'#FF4401'
 },
 Public:{
    color:'#FF4401',
    fontFamily:'mp-b',
    fontSize:16,
    textAlign:'center',
    marginTop:8
 },
 pubButton:{
    width:Dimensions.get('screen').width-24,
    height:40,
    backgroundColor:'#F9E8E1',
    marginTop:8,
    borderRadius:8
 },
 statBox:{
    flex:1,
    alignItems:'center',
    marginTop: 12
 },
 stNum:{
    fontFamily:'mp-eb',
    fontSize:20
 },
 stText:{
    fontFamily:'mp-m',
    fontSize:14,
    color:'#777777'
 },
 posts:{
    height:24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor:'white',
    marginTop:30
 },
 tag:{
    textAlign:'center',
    fontFamily:'mp-m',
    fontSize:16,
    color:'#FF4401',
    marginTop:8
 }
});
