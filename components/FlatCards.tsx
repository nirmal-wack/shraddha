import React from "react";
import { ScrollView, StyleSheet , Text , View } from "react-native";


function FlatCards(){
    return(
        <View>
            <Text style = {styles.headingText}>
                FlatCards
            </Text>
           

            <ScrollView horizontal={true} style = {styles.container} >
                <View style = {styles.card}>
                    <Text>Red</Text>
                </View>
                <View style = {styles.card}>
                    <Text>Red</Text>
                </View>
                <View style = {styles.card}>
                    <Text>Red</Text>
                </View>
                <View style = {styles.card}>
                    <Text>Red</Text>
                </View>
                <View style = {styles.card}>
                    <Text>Red</Text>
                </View>
            </ScrollView>
        </View>

        
    )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 18 ,
    } ,
    container :{
        flex : 1,
        paddingHorizontal : 8 ,
        flexDirection : "row",
        elevation : 4
    },
    card : {
        width : 100 ,
        height : 100 ,
        backgroundColor : "#eb4034" ,
        borderRadius : 8 ,
        justifyContent : "center",
        alignItems : "center",
        margin : 8,

    },
    
 
});

export default FlatCards;