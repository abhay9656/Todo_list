import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const list = () => {
  return (
    <View style={styles.container}>
        <Icon name='bars' size={30} style={{top:20,}}/>
        <Text style={{marginTop:30,fontSize:20,fontWeight:'bold'}}>List</Text>
        <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={styles.flex}>
                <Text>A</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
            <Text>b</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.flex}>
                <Text>A</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
            <Text>b</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={styles.flex}>
                <Text>A</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
            <Text>b</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={styles.flex}>
                <Text>A</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
            <Text>b</Text>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"#fff"
    },
    flex:{
        padding:10,
        // margin:'auto',
        width:150,
        height:120,
        backgroundColor:"lightgrey",
        borderRadius:10
    }
})

export default list
