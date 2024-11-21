import React, { Component } from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import { ImagesAssets } from '../assets/ImageAsset'
import { IonIcon } from './Icons'

type CartItemProps = {
    image : any ,
    name : any ,
    price : any ,
    qunatity : number ,
}


function CartItem({ image ,name , price , qunatity } : CartItemProps){

    return (
        <View style={styles.cartItem}>
        <Image source={image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>{price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButtonRemove}>
              <IonIcon name="remove-outline" size={20} color="#3EB57C" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{qunatity}</Text>
            <TouchableOpacity style={styles.quantityButtonAdd}>
              <IonIcon name="add-outline" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
    cartItems: {
        flex: 1,
        paddingHorizontal: 16,
      },
      cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#f5f2f2',
        borderRadius: 10,
        padding: 10,
      },
      productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
      },
      productDetails: {
        flex: 1,
        marginLeft: 10,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      quantityButtonRemove: {
        padding: 5,
        backgroundColor : "#fff",
        borderRadius : 10 ,
      },
      quantityButtonAdd: {
        padding: 5,
        backgroundColor : "#3EB57C",
        borderRadius : 10 ,

      },
      quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
      },
})

export default CartItem
