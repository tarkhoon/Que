import React,{useState} from 'react';

import { StyleSheet, Text,  View, Image,FlatList, ScrollView} from 'react-native';

import * as Font from 'expo-font';



export default function Stories(storiess) {
  const [stories, setStories] = useState(Object.values(storiess)[0]);
return(
  
    <View style={styles.Stories}>
      <ScrollView
      
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentcontainerstyle={{
        flexdirection: 'row',
        flexwrap: 'wrap',
        }}
      >
        <FlatList 
        contentContainerStyle={{flexDirection : "row"}} 
        data={stories} renderItem={({item}) => (
            <View style={styles.storie}>

              <Image style={styles.stPic} source={{uri:item.img}}/>
              <Text style={styles.stText}>{item.name}</Text>
  
            </View>
        )}/>
       </ScrollView>
    </View>
  
  


  
);

  
}

const styles = StyleSheet.create({

Stories:{
  width:'100%',
  height:114
},
storie:{
  width:93,
  height:114,
},
stPic:{
  width:87,
  height:87,
  borderRadius:43.5
},
stText:{
textAlign:'center',
fontFamily:'mp-m',
fontSize:14
}

});
