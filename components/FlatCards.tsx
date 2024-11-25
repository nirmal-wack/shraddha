import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImagesAssets } from "../assets/ImageAsset";

type FlatCards = {
    image : any ,
    name : any ,
}

function FlatCards( { image , name } : FlatCards) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                <Text style={styles.categoryText}>{name}</Text> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: "row",
        elevation: 4,
    },
    card: {
 
        margin: 8,
        flexDirection: "row",
        backgroundColor : "#fff",
        borderRadius : 9,

    },
    imageContainer: {
        width: 125,
        height: 100,
        borderRadius: 15,
        alignItems:"center"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    categoryText: {
        position: "absolute",
        bottom: 0, 
        width: "99%",
        textAlign: "center",
        color: "#fff", 
        fontWeight: "bold",
        backgroundColor: "rgba(62, 181, 124, 0.7)", // Add a background for better readability
        paddingVertical: 4,
        marginHorizontal : 0,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 9,

    },
});

export default FlatCards;
