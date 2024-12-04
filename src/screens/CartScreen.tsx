import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { IonIcon } from '../../components/Icons';
import { ImagesAssets } from '../../assets/ImageAsset';
import CartItem from '../../components/CartItem';

export class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* <IonIcon name="chevron-back" size={24} color="#3EB57C" onPress={() => this.props.navigation.goBack()} /> */}
          <Text style={styles.headerText}>My Cart</Text>

        </View>

        {/* Cart Items */}
        <ScrollView style={styles.cartItems}>

          <CartItem image = {ImagesAssets.school} name = "Uniform for School A"  price = "$15" qunatity = {1} />
          <CartItem image = {ImagesAssets.school2} name = "Uniform for School B"  price = "$35" qunatity = {1} />
          <CartItem image = {ImagesAssets.google} name = "Uniform for School B"  price = "$10" qunatity = {1} />

         
        </ScrollView>

        {/* Checkout Section */}
        <View style={styles.checkoutContainer}>
          
          <Text>Pay Using </Text>
          <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.totalText}>$60</Text>
          <View style = {styles.OrderComp}>
          <Text style={styles.checkoutButtonText}>Place Order</Text>
          <IonIcon name = "chevron-forward-sharp" size = {16} color='#fff' />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#3E3E3E',
  },
  cartItems: {
    flex: 1,
    paddingHorizontal: 16,
  },
  checkoutContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between"

  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

    // marginBottom: 10,
    // textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#3EB57C',
    flexDirection : "row",
    paddingVertical: 5,
    width : "70%",
    height : 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent : "space-between",
    marginHorizontal : 5 ,
    paddingHorizontal: 10, // Added padding of 5 from the left and right sides
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    // marginBottom: 10,

  },
  OrderComp : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
  }
});

export default CartScreen;
