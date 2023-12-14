import React ,{useState} from 'react';

import { StyleSheet, Text,  View, TouchableOpacity,Image,FlatList, Dimensions,ScrollView} from 'react-native';

import * as Font from 'expo-font';



const numColumns = 3;
export default function Rec(post) {
    const [posts, setPosts] = useState(Object.values(post)[0]);

return (
      
  
        <View style={styles.lent}>

                <FlatList 
                    
                    numColumns={3}
                    data={posts} 
                    renderItem={({item}) => (
                        
                        <View style={styles.post}>

                        <Image  style={styles.postPicture} source={{uri:item.img}} resizeMode='center'/>

                        </View>
                    )}
                />
        </View>
  
  
  
);

}

const styles = StyleSheet.create({
 
lent:{
    flex:1,
    marginTop:8,
    backgroundColor:'#DBDBDB',
    flexDirection:'row',
    flexwrap:'wrap'
},
post:{
    flex:1,
    backgroundColor:'white',
    margin:1
},
postPicture:{
    width:'100%',
    height:Dimensions.get('window').width / numColumns
}

});
