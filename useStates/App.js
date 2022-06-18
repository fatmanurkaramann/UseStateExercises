import React,{useState} from "react";
import {View,Text,Button,FlatList,Switch,StyleSheet} from "react-native"

const data=[
  {id:0,name:"cafe.exe",isFavorite:true},
  {id:1,name:"KafaKafe",isFavorite:false},
  {id:2,name:"BugG",isFavorite:false}

]
const App=()=>{
  const [cafeList,setCafeList]=useState(data)
  const[showOnlyFavorites,setShowOnlyFavorites]=useState(false)

  const onFavoriteChange=(isFavoriteSelected)=>{
    setShowOnlyFavorites(isFavoriteSelected)
    isFavoriteSelected?
    setCafeList(cafeList.filter(cafe=>cafe.isFavorite))
    : setCafeList(data)
  }

return(
  <View style={styles.container}>
    <Switch style={styles.switch} value={showOnlyFavorites} onValueChange={onFavoriteChange}/>
    <FlatList data={cafeList} renderItem={({item})=> <Text style={styles.textName}>{item.name}</Text>}/>

  </View>
)
}
const styles=StyleSheet.create({
container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#e0e0e0",
  padding:140,
  margin:9,
  borderRadius:50
},
switch:{
  height:15,
  width:100,
  margin:10,
  padding:23,
  backgroundColor:"violet",
  
  
  
},
textName:{
  fontSize:25,
  fontStyle:"italic",
  fontWeight:"bold",
  color:"purple",
  textAlign:"center",
}
})
  export default App



