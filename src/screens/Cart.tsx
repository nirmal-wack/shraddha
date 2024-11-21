import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { IonIcon } from '../../components/Icons';
import { ImagesAssets } from '../../assets/ImageAsset';
import CartItem from '../../components/CartItem';

export class Cart extends Component {
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
          <Text style={styles.totalText}>Total: $60</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Check Out</Text>
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
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#3EB57C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Cart;
