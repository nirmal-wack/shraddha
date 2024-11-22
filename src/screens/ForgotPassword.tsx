import React from "react";
import {View ,Text, TouchableOpacity , TextInput} from "react-native";
import { StyleSheet } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IonIcon } from "../../components/Icons";
import { RootStackParmeterList } from "../../navigations/UserIndex";

type ForgotProps = NativeStackScreenProps<RootStackParmeterList , "ForgotPassword">

function ForgotPassword() : JSX.Element {

  return (
    <View  style={Styles.container}>
      <View style={Styles.seconadaryContainer}>
    <Text style = {Styles.title}>
        Reset Password
      </Text>
      <Text>
        Please Enter Your Email To Reset Password.
      </Text>
      <View style={Styles.thirdContainer}>
      <IonIcon name="mail-outline" size={20} color="#666" style={Styles.icon} />
      <TextInput
        style={Styles.inputTwo}
        placeholder="Enter your Email"
        placeholderTextColor="#aaa"
      />
    </View>
        <View style = {Styles.fourthContainer}><TouchableOpacity style={Styles.signUpButton}>
          <Text style={Styles.signUpButtonText}>Send Email</Text>
        </TouchableOpacity></View>
        
      </View>
    
    </View>
  )

}

const Styles = StyleSheet.create({

  container : {
    flex : 1,
   
  },
  title : {
    fontSize : 24 ,
    fontWeight : "bold",

  },
  seconadaryContainer : {
    flex : 1,
    marginHorizontal : 20 ,
    marginTop : 50 ,
  },
  thirdContainer : {
    marginTop : 50 ,
    padding : 2 ,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  icon: {
    marginRight: 10,
  },
  inputTitle : {
    fontSize : 16 ,
    fontWeight : "bold",
  },
  input: {
    width: '100%',
    padding: 15,
    color: '#3E3E3E',
    borderWidth : 1,
    borderBottomColor: '#ccc',
    borderRadius : 15 ,
    marginTop: 10,
    fontSize: 16,
  },
  fourthContainer : {
    alignItems: "center", // Centers the button horizontally
    marginTop: 20,
  },
  signUpButton: {
    justifyContent : "center",
    width: 180,
    padding: 10,
    backgroundColor: '#3EB57C',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For shadow on Android
  },
  signUpButtonText: {
    color: '#FFFFFF', // Changed to make text more readable on a green background
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputTwo : {
    flex: 1,
    fontSize: 16,
    color: "#333",
  }
,
  

})

export default ForgotPassword;