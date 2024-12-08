import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ImagesAssets } from '../../assets/ImageAsset';

//Navigate Stack Parameter
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmeterList } from '../App';

//Type Checking
type LoginProps = NativeStackScreenProps<RootStackParmeterList,"Login">



const Login = ({navigation} : LoginProps ) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.headerText}>LOGO</Text>
      </View>
      <Text style = {[styles.headText , { fontSize: 24 } ] }   > Log In </Text>
      <Text style = {[styles.headerInnerText , { fontSize: 16 } ] }> Welcome back </Text>

    <View style={styles.secondaryContainer}>
      {/* Header */}

     
      {/* Input Fields */}
      {/* <TextInput style={styles.input} placeholder="Name" /> */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.forgotPassword}>
      <Text onPress = {() => navigation.navigate("ForgotPassword")}>Forgot Password</Text>
      </View>


      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Terms and Privacy Text */}
      <Text style={styles.termsText}>
        or
      </Text>

      {/* Social Media Buttons */}
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.iconContainer}>
        <Image source={ImagesAssets.google} style={{ width : 40 , height : 40}} />          
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <Image source={ImagesAssets.facebook} style={styles.icon} />          
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <Image source={ImagesAssets.twitter} style={{ width : 25 , height : 25}}/>          
        </TouchableOpacity>
      </View>

      {/* Login Text */}
      
    </View>
    <View style={styles.loginText}>
        <Text style={styles.loginLink}>Don't Have an Account Yet ?</Text>
        <Text style={[styles.loginLink , { color: '#3EB57C',}]}  onPress={() => navigation.navigate("Register",{productId:"11"})}>Register</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    backgroundColor: '#FFFFFF',
  },
  secondaryContainer: {
    flex: 1,
    paddingHorizontal: 20, // Combines paddingLeft and paddingRight
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headingContainer: {
    marginHorizontal: 20,
    marginTop: 150, // Adjusted from 200 to ensure it doesn't push content too far down
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  headText : {
    color: '#3E3E3E',
    paddingHorizontal : 15 ,
    paddingTop : 40 ,
    justifyContent : 'flex-start',
    marginBottom: 20,
  },
  headerInnerText :{
    color: '#3E3E3E',
    paddingHorizontal : 15 ,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    padding: 15,
    color: '#3E3E3E',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
  },
  forgotPassword :{
    flexDirection: "row", // Required for horizontal alignment
  justifyContent: "flex-end", // Align the single Text element to the end
  alignItems: "center",
    fontWeight: 'bold',

  },
  signUpButton: {
    width: '60%',
    padding: 10,
    backgroundColor: '#3EB57C',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
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
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For shadow on Android
  },
  icon: {
    width: 30,
    height: 30,
  },
  loginText: {
    flexDirection: "row", // Align text horizontally
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    marginTop: 10, // Optional: Add some spacing from other elements
    marginBottom : 10 ,
  },
  loginLink: {
    color: '#3E3E3E',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 5, // Add spacing between the two Text elements
  },
});

export default Login;
