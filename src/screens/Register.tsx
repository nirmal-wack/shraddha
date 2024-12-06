import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { ImagesAssets } from '../../assets/ImageAsset';

//navigation 

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmeterList } from '../../navigations/UserIndex';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IonIcon } from '../../components/Icons';
import axios from 'axios';
type RegisterProp = NativeStackScreenProps<RootStackParmeterList, "Register">


function Register({ navigation }: RegisterProp) {

  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParmeterList>>()


  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [mobile, setMobile] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)


  const handleRegisration = async () => {

    if (!email) {
      Alert.alert("Error", "Please enter a email address.");
      return
    }
    if (!name) {
      Alert.alert("Error", "Please enter a name.");
      return
    }
    if (!mobile) {
      Alert.alert("Error", "Please enter a phone number.");
      return
    }

    setLoading(true)

    try {
      const response = await axios.post("https://eduneeds.co.in/api/v1/auth/register", {
        name: name,
        email: email,
        mobile: mobile,
      })

      console.log(response)

      if (response.status === 200) {
        console.log("Response Data:", response.data);
        setLoading(false)
        Alert.alert("Success", "OTP sent to your email.");
        navigation.navigate("OtpVerificationScreen", { email });
      } else {
        Alert.alert("Error", "Failed to send OTP. Try again.");
      }

    }
    catch (error: any) {
      console.error(error);
      setLoading(false)
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong."
      );

    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.TopImage}>
        <Image source={ImagesAssets.logo1} style={{ width: 120, height: 155 }} />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={[styles.headerInnerText]}>Create Your Account </Text>

      </View>
      <View style={styles.secondaryContainer}>

        <View style={styles.thirdContainer}>
          <IonIcon name="person" size={20} color="#3E3E3E"  style={styles.icon2} />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.thirdContainer}>
          <IonIcon name="mail" size={20}  style={styles.icon2} color="#3E3E3E" />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.thirdContainer}>
          <IonIcon name="call" size={20}  style={styles.icon2} color="#3E3E3E" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Mobile Number"
            placeholderTextColor="#aaa"
            value={mobile}
            onChangeText={(text) => setMobile(text)}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleRegisration} disabled={loading}>
          <Text style={styles.signUpButtonText}>{loading ? "Signing up..." : "Sign Up"}</Text>
        </TouchableOpacity>

        {/* Terms and Privacy Text */}
        <Text style={styles.termsText}>
          By Signing Up, You agree to our Terms and Privacy Policies
        </Text>

        {/* Social Media Buttons */}
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={ImagesAssets.google} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={ImagesAssets.facebook} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={ImagesAssets.twitter} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>

        {/* Login Text */}
        <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>
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
  TopImage: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop : 30 ,
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
    marginTop: 70, // Adjusted from 200 to ensure it doesn't push content too far down
  },
  headerText: {
    fontSize: 32,
    color: '#3E3E3E',
    // paddingHorizontal: 5,
    fontWeight : "bold",
    // alignContent: "center",
    marginBottom: 5,
  },
  headerInnerText: {
    color: '#3E3E3E',
    // paddingHorizontal: 6,
    fontWeight : "bold",
    marginBottom: 5,
    fontSize: 16 
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
    fontWeight: "bold",
  },
  loginLink: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
  thirdContainer: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    
    // Shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.2, // Adjust opacity for a subtle effect
    shadowRadius: 4,   // Blur effect for shadow
    shadowOffset: { width: 0, height: 2 }, // Direction of the shadow
  
    // Shadow for Android
    elevation: 5, // Elevation determines the height of the shadow
    backgroundColor: '#fff',

  },
  icon2: {
    marginRight: 10,
    color : "#3E3E3E"    
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft : 10 ,
    color: "#333",
  },
});

export default Register;
