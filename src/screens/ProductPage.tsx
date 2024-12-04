import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import ProductCard from "../../components/ProductCard";
import { ImagesAssets } from "../../assets/ImageAsset";
import { IonIcon } from "../../components/Icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParmeterList } from "../../navigations/UserIndex";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductPageProps = NativeStackScreenProps<RootStackParmeterList, "ProductPage">;
export type Product = {
  id : string ,
  name: string;
  price: number;
};

function ProductPage({ route }: ProductPageProps) {
  const { dealerData } = route.params;
  const [cart, setCart] = useState<Product[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParmeterList>>()

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
  };

  const handleCheckout = () => {
    navigation.navigate("Cart")
  }

  return (
    <View style={styles.container}>
      {/* Dealer Banner Section */}
      <ImageBackground source={ImagesAssets.banner} style={styles.banner}>
        <View style={styles.bannerOverlay}>
          <Text style={styles.dealerName}>{dealerData.company_name}</Text>
          <Text style={styles.dealerInfo}>{dealerData.address}</Text>
          <View style = {styles.ratingContainer}>
              <Text style={styles.rating}>{dealerData.rating} </Text>
              <Text>⭐</Text>
            </View>

        </View>
      </ImageBackground>

      {/* Product List */}
      <View style={styles.productSection}>
        <Text style={styles.sectionTitle}>Our Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
          <ProductCard
            id = "1" image = {ImagesAssets.backpack}  productName  ="Bag 2" ratings = "5.0" onAddToCart = {() => handleAddToCart({ id : "1" , name: "Bag 2", price: 100 })}  oldPrice = "2400" newPrice = "100"
          />
          {/* <ProductCard
            style={styles.card}
            image={ImagesAssets.backpack}
            name="Bag 2"
            onAddToCart={() => handleAddToCart({ name: "Bag 2", price: 2499 })}
          />
          <ProductCard
            style={styles.card}
            image={ImagesAssets.backpack}
            name="Bag 3"
            onAddToCart={() => handleAddToCart({ name: "Bag 3", price: 2999 })}
          /> */}
        </ScrollView>
      </View>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress = {handleCheckout}>
          <Text style={styles.checkoutText}>Checkout ({cart.length} items)</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  // Banner Section
  banner: {
    width: "100%",
    justifyContent: "flex-end",
  },
  bannerOverlay: {
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor : "#4bdb96",
    padding: 20,
    // borderBottomLeftRadius : 20,
    // borderBottomRightRadius : 20,
    borderRadius : 15 ,
    marginHorizontal : 5 ,
    marginTop : 5 ,
  },
  dealerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  dealerInfo: {
    fontSize: 14,
    color: "#fff",
    // fontWeight : "bold",
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor : "#fff",
    width : 55 ,
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
  // Product Section
  productSection: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  productList: {
    flexDirection: "row",
    gap: 15,
  },
  card: {
    marginRight: 10,
  },
  // Checkout Button
  checkoutButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#3EB57C",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProductPage;
