import React, { Component } from 'react'
import { Image, StyleSheet, Text, View , TouchableOpacity, Linking } from 'react-native'
import { ImagesAssets } from '../assets/ImageAsset'

function FlashCards(){

  function openWebsite(websiteLink : string){
    Linking.openURL(websiteLink)
  }
    return (
      <View>
        
        <View style = {[styles.cards  ]}>
          <View style = {styles.imageContainer}>
          <Image style={ styles.cardImage} source={ImagesAssets.school}/>
          </View>

          <View style = {styles.cardImageDesc}>
            <Text style = {styles.schoolName}>
              Ambe School
            </Text>
            <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Jainism')}>
              <Text style = {styles.locationName}>Manjalpur</Text>
            </TouchableOpacity>
          </View>
         
        </View>
        
      </View>
    )
  
}

const styles = StyleSheet.create({
    cards : {
      width : 230 ,
      height : 240 ,
      backgroundColor : "#FFF",
      margin : 8 ,
      borderRadius : 25,
      alignItems : "center",

    } ,
    imageContainer : {
      paddingTop : 10 ,
    },
    cardImage : {
        width: 200, height: 150,
        borderRadius : 15, 
    },
    cardImageDesc : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      width: '100%',
      marginTop: 10,
      paddingHorizontal: 12,
     
    },
    schoolName : {
      fontWeight : "bold",
      color : "#3E3E3E",
    },
    locationName : {
      color : "#3E3E3E",
      fontSize : 12 ,
    }

})

export default FlashCards
