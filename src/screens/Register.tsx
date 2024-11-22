import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ImagesAssets } from '../../assets/ImageAsset';

//navigation 

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmeterList } from '../../navigations/UserIndex';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IonIcon } from '../../components/Icons';
type RegisterProp = NativeStackScreenProps<RootStackParmeterList , "Register">

  const Register  = ({route} : RegisterProp) => {

  const {productId} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParmeterList>>()

  return (
    <View style={styles.container}>
      <View style = {styles.TopImage}>
      <Image source={ImagesAssets.logo} style={{ width : 200, height : 180}}/>          
      </View>
      <View style={styles.headingContainer}>
      <Text style={styles.headerText}>Sign Up</Text>
      </View>
    <View style={styles.secondaryContainer}>

      <View style={styles.thirdContainer}>
        <IonIcon name="person-outline" size={20} color="#666" style={styles.icon2} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.thirdContainer}>
        <IonIcon name="mail-outline" size={20} color="#666" style={styles.icon2} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.thirdContainer}>
        <IonIcon name="lock-closed-outline" size={20} color="#666" style={styles.icon2} />
        <TextInput
          style={styles.input}
          placeholder="Create Password"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Terms and Privacy Text */}
      <Text style={styles.termsText}>
        By Signing Up, You agree to our Terms and Privacy Policies
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
      <Text style={styles.loginText} onPress={ () => navigation.navigate("Login")}>
        Already Have an Account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    backgroundColor: '#FFFFFF',
  },
  TopImage:{
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  secondaryContainer: {
    flex: 1,
    paddingHorizontal: 20, // Combines paddingLeft and paddingRight
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headingContainer: {
    marginHorizontal: 30,
    marginTop: 50, // Adjusted from 200 to ensure it doesn't push content too far down
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  // input: {
  //   width: '100%',
  //   padding: 15,
  //   color: '#3E3E3E',
  //   borderWidth: 1,
  //   borderRadius : 15,
  //   borderBottomColor: '#ccc',
  //   marginBottom: 20,
  //   fontSize: 16,
  // },
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
    fontSize: 14,
    color: '#666',
    marginTop: 30,
    fontWeight : "bold",
  },
  loginLink: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
  thirdContainer : {
    padding : 2 ,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  icon2: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});

export default Register;
