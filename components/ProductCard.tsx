import React from "react";
import { Image, StyleSheet, Text, View , TouchableOpacity } from "react-native";
import { IonIcon } from "./Icons";

type ProductCard = {
    image : any ,
    name : any ,
    style : any ,

}

function ProductCard( { image , name , style } : ProductCard) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>

        <View style = {styles.textContainer}>
         <Text style={styles.productNameText}>Bags</Text>
           <View style = {styles.ratingContainer}>
              <Text style={styles.rating}>4.0 </Text>
              <Text>⭐</Text>
            </View>
          <Text style={styles.sellerNameText}>by dealer_name</Text>

          {/* Address & Contact */}
      <Text style={styles.description}>
        {/* <Text style={styles.boldText}>Address: </Text> */}
        Description
      </Text>


        </View>
{/* Products and Button */}
    <View style={styles.footer}>
          <View style = {styles.priceContainer}>
            <Text style={styles.productPrice}> ₹2499.00</Text>
            <Text style={styles.productOldPrice}> ₹4000.00</Text>
          </View>
          <TouchableOpacity style={styles.addToCart}>
            <IonIcon name = "cart-sharp" size = {18} color='#fff'/>
            <Text style={styles.addToCartText}>Add </Text>
          </TouchableOpacity>
        </View>
      
      
    </View>
    );
}

const styles = StyleSheet.create({

    card: {
 
      width: 200,
      height: 300,
      backgroundColor : "#fff",
      padding : 10,
      borderRadius : 20 ,
      marginHorizontal : 10 ,

    },
    imageContainer: {
        width: 125,
        height: 100,
        borderRadius: 15,
        alignItems:"center",
        alignSelf : "center",
        justifyContent : "center",
        backgroundColor : "#f0f0f0"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    textContainer : {
      alignItems : "flex-start",
      paddingHorizontal : 5,
    },
    productNameText: {
      marginTop: 10,
      fontSize: 18,
      color: 'rgba(62, 62, 62 , 0.6)',
    },
    sellerNameText: {
      fontSize: 16,
      fontWeight: '600',
      marginTop : 10 , 
      color: 'rgba(62, 62, 62 , 0.6)',
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
      marginTop : 10 ,
      padding : 1 ,
      borderRadius : 5 ,
  
    },
    rating: {
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 5,
      marginLeft : 5,
    },
    description: {
      fontSize: 16,
      color: 'rgba(62, 62, 62 , 0.6)',
      marginVertical: 5,
      marginTop : 5 ,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      padding : 5 ,
    },
    priceContainer: {
     flexDirection : "column"
    },
    productPrice: {
      color: '#3EB57C',
      fontWeight: 'bold',
    },
    productOldPrice : {
      color: '#3E3E3E',
      // fontWeight: 'bold',
      textDecorationLine: 'line-through', 
      textDecorationStyle: 'solid'
    },

    addToCart: {
      backgroundColor: '#3EB57C',
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 10,
      flexDirection : "row",
      alignItems : "center",
    },
    addToCartText: {
      color: '#fff',
      fontWeight: 'bold',
    },
   
});

export default ProductCard;
