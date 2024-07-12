import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import Ic from 'react-native-vector-icons/Ionicons';

const list = () => {
  return (
    <View style={styles.container}>
        <Icon name='bars' size={30} style={{top:20,}}/>
        <Text style={{marginTop:30,fontSize:20,fontWeight:'bold'}}>List</Text>
        <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={styles.flex}>
                <Icons name='clipboard' color={'blue'}  size={30}/>
                <Text style={{fontSize:20,marginLeft:6,top:15}}>All</Text>
                <Text style={{marginTop:10}}>23 task</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
                <Ic name='bag-outline' color={'#e1ad01'} size={30}    />
                <Text style={{fontSize:20,marginLeft:4,top:15}}>work</Text>
                <Text style={{marginTop:10}}>14 task</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={styles.flex}>
                <Icons name='clipboard' color={'blue'}  size={30}/>
                <Text style={{fontSize:20,marginLeft:6,top:15}}>Music</Text>
                <Text style={{marginTop:10}}>23 task</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
                <Ic name='bag-outline' color={'#e1ad01'} size={30}    />
                <Text style={{fontSize:20,marginLeft:4,top:15}}>Travel</Text>
                <Text style={{marginTop:10}}>14 task</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={styles.flex}>
                <Icons name='clipboard' color={'blue'}  size={30}/>
                <Text style={{fontSize:20,marginLeft:6,top:15}}>Study</Text>
                <Text style={{marginTop:10}}>23 task</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
                <Ic name='bag-outline' color={'#e1ad01'} size={30}    />
                <Text style={{fontSize:20,marginLeft:4,top:15}}>Home</Text>
                <Text style={{marginTop:10}}>14 task</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',marginTop:15}}>
            <View style={styles.flex}>
                <Icons name='clipboard' color={'blue'}  size={30}/>
                <Text style={{fontSize:20,marginLeft:6,top:15}}>Game</Text>
                <Text style={{marginTop:10}}>23 task</Text>
            </View>
            <View style={[styles.flex,{marginLeft:10}]} >
                <Ic name='bag-outline' color={'#e1ad01'} size={30}    />
                <Text style={{fontSize:20,marginLeft:4,top:15}}>Shopping</Text>
                <Text style={{marginTop:10}}>14 task</Text>
            </View>
        </View>
       
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"#FAF9F6"
    },
    flex:{
       
        padding:10,
        // margin:'auto',
        width:150,
        height:120,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth: 1,
    }
})

export default list
