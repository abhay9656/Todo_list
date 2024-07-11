import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const list = () => {
  return (
    <View style={styles.container}>
        <Text style={{marginTop:30}}>List</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"#5786FE"
    }
})

export default list
