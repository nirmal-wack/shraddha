import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IonIcon } from '../../components/Icons'
import FlashCards from '../../components/FlashCards'
import FlatCards from '../../components/FlatCards'
import { ImagesAssets } from '../../assets/ImageAsset'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePageProps } from '../../navigations/UserIndex'
function HomePage({ navigation }: HomePageProps) {
  return (
    <View style={styles.container}>
        // Location Bar Row
      <View style={styles.secondaryContainer}>
        <View style={styles.locationContainer}>
          <IonIcon name="location" size={24} color="#000" />
          <Text style={styles.locationText}>456 Elm Street, Suite 3, LA</Text>
        </View>

        <TouchableOpacity style={[styles.notificationIcon]} onPress={() => navigation.navigate("Notification")}>
          <IonIcon name="notifications" color='#3EB57C' size={24} />
        </TouchableOpacity>
      </View>

        // Serach Bar Row
      <View style={styles.thirdContainer}>
        <View style={styles.searchContainer} >
          <IonIcon name="search-outline" color='#3E3E3E' />
          <TextInput placeholder='Search Here...' />
        </View>
        <TouchableOpacity style={[styles.filter]} onPress={() => navigation.navigate("Filter")}>
          <IonIcon name="options" color="#FFFFFF" size={30} />
        </TouchableOpacity>
      </View>

        //Categories

      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true}>
          <FlatCards image={ImagesAssets.google} name="Uniform" />
          <FlatCards image={ImagesAssets.twitter} name="Uniform" />
          <FlatCards image={ImagesAssets.facebook} name="Uniform" />

          z
        </ScrollView>
      </View>

        //Products
      <View style={styles.productTitleContainer} >
        <Text style={styles.productTitle}>Nearby Schools</Text>
        <TouchableOpacity style={[styles.allSchoolIcon]}>
          <IonIcon name="chevron-forward-outline" color="#3EB57C" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <ScrollView horizontal={true} >
          <FlashCards image={ImagesAssets.school} title="Ambe" location='Manjalpur' />
          <FlashCards image={ImagesAssets.school2} title="LFS" location='Manjalpur' />


        </ScrollView>
      </View>
// Test Commit
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  secondaryContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,

  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  locationText: {
    fontSize: 16,
    color: '#3EB57C',
    fontWeight: '500',
    marginLeft: 5,
  },
  notificationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },

  // Search Bar 
  thirdContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 15,

  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  filter: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#3EB57C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  productTitleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  productTitle: {
    fontSize: 22,
    color: '#3E3E3E',
    fontWeight: "bold",
  },
  allSchoolIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },

  sliderContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 10,
  }



})

export default HomePage
