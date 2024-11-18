import React, { Component } from 'react'
import { Image, StyleSheet, Text, View , TouchableOpacity, Linking } from 'react-native'

function FlashCards(){

  function openWebsite(websiteLink : string){
    Linking.openURL(websiteLink)
  }
    return (
      <View>
        
        <View style = {[styles.cards  ]}>
            <Image style={ styles.cardImage} source={{uri: 'https://lh3.googleusercontent.com/proxy/86qo_22ZHTo1Tv2Kp7v0g8pUnjlpHkI5FdgGlsjgJY44ResA6x7opsd9GsdqbMngBR3Px4i8DjQ24LGGg4JJEfbGYAn9paj6nnbj69f9lEc-kbvgwRgkrnWy8n-D6Mcoc759IVIGvc9JFf-nhH5K_X-L74XfUNcdVJx4R7LPt7k-'}}/>
            <Text>
            Jainsim
          </Text>
          <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Jainism')}>
            <Text>Learn More</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  
}

const styles = StyleSheet.create({
    cards : {
      width : 180 ,
      height : 150 ,
      backgroundColor : "#0ABDE3",
      margin : 8 ,
      borderRadius : 8,


    } ,
    cardImage : {
        width: 180, height: 100,
    } ,
})

export default FlashCards
