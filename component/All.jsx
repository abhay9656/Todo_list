import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const All = () => {
  return (
    <View style={styles.container}>
        <View style={{flex:1 ,justifyContent:'center',marginLeft:15}}>
             <Icons name='clipboard' color={'white'}  size={30} style={{top:40}}/>
            <Text style={{color:'white',marginTop:50,fontSize:28}}>All</Text>
            <Text style={{color:'white',marginTop:10}}>23 Task</Text>
        </View>
        <View style={styles.flex}>
             <Text style={{padding:10,fontSize:20}}>Late</Text>
        </View> 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#5886fe',
        flex:1,
        // padding:15,
    },
    flex:{
        flex:2,
        height:100,
        backgroundColor:'white',
        borderRadius:15, 
    },
})

export default All
