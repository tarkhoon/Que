import React ,{useState} from 'react';
import { StyleSheet, Text,  View, Image,TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'mp-eb': require('../assets/fonts/Manrope-ExtraBold.ttf'),
  'mp-b': require('../assets/fonts/Manrope-Bold.ttf'),
  'mp-m': require('../assets/fonts/Manrope-Medium.ttf')
})


export default function Header({title, page}) {
  const [font,setFont] = useState(false);
  if (font){
    if(page==0){
        return (
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <Image 
                    style={styles.icon}
                    source={require('../assets/header-icons/notif.png')}
                    />
                </TouchableOpacity>
            </View>
        
          );
    }else if(page==1){
      return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity>
                <Image 
                style={styles.icon}
                source={require('../assets/header-icons/find.png')}
                />
            </TouchableOpacity>
        </View>
    
      );
    }else if(page==3){
      return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity>
                <Image 
                style={styles.icon}
                source={require('../assets/header-icons/notif.png')}
                />
            </TouchableOpacity>
        </View>
    
      );
    }else if(page==4){
      return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity>
                <Image 
                style={styles.icon}
                source={require('../assets/header-icons/notif.png')}
                />
            </TouchableOpacity>
        </View>
    
      );
    }

  }else{
    return(
        <AppLoading startAsync={fonts} 
        onFinish={() => setFont(true)}
        onError={console.warn}
        />
    );
  }

}

const styles = StyleSheet.create({
    header:{
        height:64,
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'
    },
    title:{
        marginLeft: 20,
        fontFamily:'mp-eb',
        fontSize:28
    },
    icon:{
        width:24,
        height:24,
        marginRight:21,
        resizeMode:'contain'
    }

});
