import React from "react";
import { ScrollView, StyleSheet, Text, View , TouchableOpacity } from "react-native";
import ProductCard from "../../components/ProductCard";
import { ImagesAssets } from "../../assets/ImageAsset";
import { IonIcon } from "../../components/Icons";

function ProductPage(){

    return(
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Admin's Store</Text>
                <View style = {styles.callIcon}>
                    <IonIcon name = "call-sharp" size = {24} color='#000'/>
                </View>
            </View>

      {/* Profile Info Section */}
      {/* <View style={styles.profileSection}>
        <Text>fasdfib</Text>
      </View> */}
        
            <View style = {styles.productListContainer}>
                <ScrollView horizontal = {true}   >
                    <ProductCard style={styles.card} image={ImagesAssets.backpack} name="Bags" />
                    <ProductCard style={styles.card} image={ImagesAssets.backpack} name="Bags" />
                    <ProductCard style={styles.card} image={ImagesAssets.backpack} name="Bags" />

                </ScrollView>
            </View>
        </View>
     
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    header: {
        flexDirection: "row",
        justifyContent : "space-between",
        padding: 30,
        alignItems :"center",
        backgroundColor: "#f2f2f2",
        borderBottomWidth : 5 ,
        borderBottomColor : "#fff",
      },
      callIcon: {
        backgroundColor : "#fff",
        padding : 5 ,
        borderRadius : 20 ,
     

      },
      headerTitle: {
        color: "#3EB57C",
        fontSize: 24,
        fontWeight: "bold",
      },
    accountOverview: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
      },
        productTitle: {
    fontSize: 22,
    color: '#3E3E3E',
    fontWeight: "bold",
  },
    productListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%',
        marginTop: 10,
        // backgroundColor : "rgba(62, 62, 62 , 0.6)"
        // paddingHorizontal: 10,
    },
    scrollViewContainer: {
        flexDirection: "row",
        alignItems: "center", // Optional, for better alignment
    },
    card: {
        marginRight: 20, // Adds spacing between cards
    },
 
});


export default ProductPage