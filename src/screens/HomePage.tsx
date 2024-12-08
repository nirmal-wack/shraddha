import React, { Component , useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IonIcon } from '../../components/Icons'
import FlashCards from '../../components/FlashCards'
import FlatCards from '../../components/FlatCards'
import { ImagesAssets } from '../../assets/ImageAsset'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePageProps } from '../../navigations/UserIndex'
import DealerCards from '../../components/DealerCards'

function HomePage({ navigation }: HomePageProps) {

  const dealerDataArray = [
    {
      image: ImagesAssets.google,
      company_name: "Company 1",
      year: "2024",
      dealer_name: "Dealer Alpha",
      rating: "5.0",
      address: "Manjalpur, Vadodara",
      phone: "+91 9098765431",
      no_product: "1",
    },
    {
      image: ImagesAssets.google,
      company_name: "Company 2",
      year: "2025",
      dealer_name: "Dealer Beta",
      rating: "4.5",
      address: "Alkapuri, Vadodara",
      phone: "+91 9876543210",
      no_product: "2",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dealerDataArray);

  const handleSearch = (query: string) => {
    console.log()
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredData(dealerDataArray); // Reset if the query is empty
    } else {
      const filtered = dealerDataArray.filter(item =>
        item.dealer_name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filtered)
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
        // Location Bar Row
      <View style={styles.secondaryContainer}>
        <View style={styles.locationContainer}>
          <IonIcon name="location-sharp" size={24} color="#000" />
          <Text style={styles.locationText}>456 Elm Street, Suite 3, LA</Text>
        </View>

        <TouchableOpacity style={[styles.notificationIcon]} onPress={() => navigation.navigate("Notification")}>
          <IonIcon name="notifications-sharp" color='#3EB57C' size={24} />
        </TouchableOpacity>
      </View>

        // Serach Bar Row
      <View style={styles.thirdContainer}>
        <View style={styles.searchContainer} >
          <IonIcon name="search-sharp" color='#3E3E3E' />
          <TextInput placeholder='Search Here...' value={searchQuery} onChangeText={handleSearch}/>
        </View>
        <TouchableOpacity style={[styles.filter]} onPress={() => navigation.navigate("Filter")}>
          <IonIcon name="options-sharp" color="#FFFFFF" size={30} />
        </TouchableOpacity>
      </View>

        //Categories

      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true}>
          <FlatCards image={ImagesAssets.backpack} name="Bags" />
          <FlatCards image={ImagesAssets.google} name="Uniform" />
          <FlatCards image={ImagesAssets.facebook} name="Uniform" />
        </ScrollView>
      </View>

        //Products
      <View style={styles.productTitleContainer} >
        <Text style={styles.productTitle}>Nearby Dealers</Text>
        <TouchableOpacity style={[styles.allSchoolIcon]}>
          <IonIcon name="chevron-forward-sharp" color="#3EB57C" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <FlatList
        data={filteredData}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DealerCards
            image={item.image} // Replace with actual image assets if needed
            company_name={item.company_name}
            year={item.year}
            dealer_name={item.dealer_name}
            rating={item.rating}
            address={item.address}
            phone={item.phone}
            no_product={item.no_product}
            onPress={() =>
              navigation.navigate("ProductPage", { dealerData: item })
            }
          />
        )}
      />
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
