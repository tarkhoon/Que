import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, SafeAreaView,TouchableOpacity,Image,FlatList, Dimensions} from 'react-native';
import Header from './components/Header';
import * as Font from 'expo-font';
import Lent from './components/Lent';
import Stories from './components/Stories';
import Rec from './screens/Rec';
import AppLoading from 'expo-app-loading';
import Profile from './screens/Profile';
import Lab2 from './screens/UseEffect';

const fonts = () => Font.loadAsync({
  'mp-eb': require('./assets/fonts/Manrope-ExtraBold.ttf'),
  'mp-b': require('./assets/fonts/Manrope-Bold.ttf'),
  'mp-m': require('./assets/fonts/Manrope-Medium.ttf')
})



export default function App() {
  const [fonts,setFont] = useState(false);
  const pages = ['Главная','Рекомендации','','To do List','Que']
  const [page,setPage] = useState(0)
  const [stories, setStories] = useState([
    {name: '#Que',
    key: '1',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
    {name: '#Que',
    key: '2',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
    {name: '#Que',
    key: '3',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
    {name: '#Que',
    key: '4',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
    {name: '#Que',
    key: '5',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
    {name: '#Que',
    key: '6',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/493bd745f989bb76fd6b72ee2c5595c8.png'},
 ]);
  const [posts, setPosts] = useState([
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '1',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '2',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '3',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '4',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '5',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '6',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '7',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '8',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/627da4bb2276556e59133720b857c9bb.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '9',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '10',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '12',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '13',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '14',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '15',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
    {name: 'Que', restaurant_name: '#QueRestaurant', grade:'5',text: 'Бизнес-модель', 
    key: '16',img:'https://s1.hostingkartinok.com/uploads/images/2023/11/476291df723c5c4d0797398a60849376.png', pic:'https://s1.hostingkartinok.com/uploads/images/2023/11/8e000d421a0df181a604c986c606616e.png',likes:'100',comments:'5',saves:'80'},
  ]);

  var title = pages[page];
  if(fonts){
    if(page==0){
      return (
        <SafeAreaView style={styles.main}>
          
          <StatusBar style="auto" />
    
    
          <Header title={title} page = {page}/>
    
          <Stories stories={stories}/>
    
    
          <Lent post={posts}/>
    
          <View style={styles.footer}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(0)}>
                    <Image 
                    style={styles.icon}
                    source={require('./assets/footer-icons/Home.png')}
                    />
                    <Text>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(1)}>
                    <Image 
                    
                    style={styles.icon}
                    source={require('./assets/footer-icons/Rec.png')}
                    />
                    <Text>Wall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(3)}>
                    <Image 
                    
                    style={styles.icon}
                    source={require('./assets/footer-icons/NewPost.png')}
                    />
                    <Text>TodoList</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(4)}>
                    <Image 
                    
                    style={styles.icon}
                    source={require('./assets/footer-icons/Profile.png')}
                    />
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
    
        </SafeAreaView>
    
      );
    }else if(page == 1){
  
      return (
        <SafeAreaView style={styles.main}>
          
          <StatusBar style="auto" />
  
    
          <Header title={title} page = {page}/>
    
          <Rec post={posts}/>
  
    
    
    
    
          <View style={styles.footer}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(0)}>
              <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/Home.png')}
              />
              <Text>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(1)}>
              <Image          
                style={styles.icon}
                source={require('./assets/footer-icons/Rec.png')}
              />
              <Text>Wall</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(3)}>
              <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/NewPost.png')}
              />
              <Text>TodoList</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(4)}>
              <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/Profile.png')}
              />
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>
    
        </SafeAreaView>
      );
    }else if(page == 3){
      return(
        <SafeAreaView style={styles.main}>
            
          <StatusBar style="auto" />


          <Header title={title} page = {page}/>

          
          <Lab2/>






          <View style={styles.footer}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(0)}>
              <Image 
              style={styles.icon}
              source={require('./assets/footer-icons/Home.png')}
              />
              <Text>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(1)}>
              <Image          
              style={styles.icon}
              source={require('./assets/footer-icons/Rec.png')}
              />
              <Text>Wall</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(3)}>
              <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/NewPost.png')}
                />
                <Text>TodoList</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(4)}>
              <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/Profile.png')}
              />
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
        );
    }else if(page == 4){
  
      return (
        <SafeAreaView style={styles.main}>
          
        <StatusBar style="auto" />
  
    
        
        <Profile/>
  
        
    
        

        <Rec post={posts}/>
        <View style={styles.footer}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(0)}>
          <Image 
          style={styles.icon}
          source={require('./assets/footer-icons/Home.png')}
          />
          <Text>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(1)}>
          <Image          
          style={styles.icon}
          source={require('./assets/footer-icons/Rec.png')}
          />
          <Text>Wall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(3)}>
          <Image 
          style={styles.icon}
          source={require('./assets/footer-icons/NewPost.png')}
          />
          <Text>TodoList</Text>
        </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setPage(4)}>
            <Image 
              style={styles.icon}
              source={require('./assets/footer-icons/Profile.png')}
            />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
    
        </SafeAreaView>
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
  main:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  footer:{
    height:64,
    width:'100%',
    justifyContent:'space-around',
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
      width:30,
      height:30
  },

});
