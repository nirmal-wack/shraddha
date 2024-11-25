import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IonIcon } from './Icons';


type DealerCardsProps = {
    image : any , 
    company_name : string ,
    year : string ,
    dealer_name : string ,
    rating : string ,
    address : string ,
    phone : string ,
    no_product : string ,
}

function DealerCards ( { image , company_name , year , dealer_name , rating , address , phone , no_product  } : DealerCardsProps ) {
  return (
    <View style={styles.cardContainer}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image 
          source={image} 
          style={styles.logo} 
        />
        <Text style={styles.storeTitle}>{company_name}</Text>
      </View>

      {/* Store Info */}
      <Text style={styles.sinceText}>Since {year}</Text>
      <View style={styles.nameContainer}>
        <Text style={styles.adminText}>{dealer_name}</Text>
        <View style = {styles.ratingContainer}>
            <Text style={styles.rating}>{rating}</Text>
            <Text>⭐</Text>
        </View>
     
      </View>

      {/* Address & Contact */}
      <Text style={styles.addressText}>
        {/* <Text style={styles.boldText}>Address: </Text> */}
        <IonIcon name = "location-sharp" size = {14} color='#3E3E3E' /> {address}
      </Text>
      <Text style={styles.contactText}>
      <IonIcon name = "call-sharp" size = {14} color='#3E3E3E' /> 
      {phone}
      </Text>

      {/* Products and Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.productsButton}>
          <Text style={styles.productsButtonText}>{no_product} Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.visitButton}>
          <Text style={styles.visitButtonText}>Visit Store </Text>
          <IonIcon name = "arrow-forward-sharp" size = {14} color='#fff'/>

        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    width: 300,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  storeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3EB57C',
  },
  sinceText: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
  adminText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3E3E3E',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent : "space-between"
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor : "rgba(62, 181, 124,0.7)",
    padding : 2 ,
    borderRadius : 5 ,

  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft : 5,
  },
  addressText: {
    fontSize: 16,
    color: 'rgba(62, 62, 62 , 0.6)',
    marginVertical: 5,
    marginTop : 5 ,
  },
  IconColor: {
    color: '#3E3E3E',
  },
  contactText: {
    fontSize: 15,
    color: 'rgba(62, 62, 62 , 0.6)',
    marginTop : 4 ,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productsButton: {
    backgroundColor: '#E5F3FF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productsButtonText: {
    color: '#3EB57C',
    fontWeight: 'bold',
  },
  VisitButtonContainer : {
    flexDirection : "row",
    alignItems : "center"
  },
  visitButton: {
    backgroundColor: '#3EB57C',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection : "row",
    alignItems : "center",
  },
  visitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DealerCards;

