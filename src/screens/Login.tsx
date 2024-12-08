import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert , KeyboardAvoidingView } from 'react-native';
import { ImagesAssets } from '../../assets/ImageAsset';

//Navigate Stack Parameter
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmeterList } from '../../navigations/UserIndex';
//Type Checking
type LoginProps = NativeStackScreenProps<RootStackParmeterList, "Login">

//Icons
import { IonIcon } from "../../components/Icons";
import axios from 'axios';


const Login = ({ navigation }: LoginProps) => {

  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSetOTP = async () => {

    if (!email) {
      Alert.alert("Error", "Please enter a valid email address.");
      return
    }
    setLoading(true)

    try {
      // Axios POST request
      const response = await axios.post("https://eduneeds.co.in/api/v1/auth/login", {
        email: email,
      });

      if (response.status === 200) {
        console.log("Response Data:", response.data);

        Alert.alert("Success", "OTP sent to your email.");
        navigation.navigate("OtpVerificationScreen", { email });
      } else {
        Alert.alert("Error", "Failed to send OTP. Try again.");
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }


  }

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView
      style={{  flex: 1,
        justifyContent: "center",
        padding: 16}}
    >
      <View style={styles.headingContainer}>
        <Image source = {ImagesAssets.logo1} style = {styles.logoImage}/>
      </View>
      </KeyboardAvoidingView>
      <View>
        <Text style={[styles.headText]}> Welcome </Text>
        <Text style={[styles.headerInnerText, { fontSize: 16 }]}> Sign In To Continue </Text>
      </View>


      <View style={styles.secondaryContainer}>
        {/* Header */}


        {/* Input Fields */}
        <View style={[styles.thirdContainer, {}]}>
          <IonIcon name="mail" size={24} color="#3E3E3E" style={styles.icon2} />
          <TextInput
            style={styles.inputTwo}
            placeholder="Enter Your Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={(text) => setEmail(text)}

          />
        </View>
        {/* <View style={styles.thirdContainer}>
        <IonIcon name="lock-closed-outline" size={20} color="#666" style={styles.icon2} />
        <TextInput
          style={styles.inputTwo}
          placeholder="Enter Your Password"
          placeholderTextColor="#aaa"
        />
      </View> */}

        {/* <View style={styles.forgotPassword}>
          <Text onPress = {() => navigation.navigate("ForgotPassword")} style = {styles.forgotPasswordText}>Forgot Password?</Text>
        </View> */}


        <TouchableOpacity style={styles.signUpButton} disabled={loading} onPress={handleSetOTP}>
          <Text style={styles.signUpButtonText}>{loading ? "Sending..." : "Log In"}</Text>
        </TouchableOpacity>

        {/* Terms and Privacy Text */}
        <Text style={styles.termsText}>
          or
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

      </View>
      <View style={styles.registerText}>
        <Text style={styles.registerLink}>Don't Have an Account Yet ?</Text>
        <Text style={[styles.registerLink, { color: '#3EB57C', }]} onPress={() => navigation.navigate("Register", { productId: "11" })}>Register</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    backgroundColor: '#fff',
  },

  headingContainer: {
    // marginHorizontal: 20,
    marginTop: 60, // Adjusted from 200 to ensure it doesn't push content too far down
    // backgroundColor: '#000',
    alignItems : "center",
    justifyContent : "center",
    padding : 20 ,

  },
  logoImage : {
    width : 120 ,
    height : 155 ,
    marginTop : 20 ,
  },

  // headerText: {
  //   fontSize: 50,
  //   fontWeight: 'bold',
  //   color: '#333',
  //   marginBottom: 20,
  
  // },
  headText: {
    fontSize: 32,
    color: '#3E3E3E',
    paddingHorizontal: 20,
    paddingTop: 90,
    fontWeight : "bold",
    alignContent: "center",
    marginBottom: 5,
    
  },
  headerInnerText: {
    color: '#3E3E3E',
    paddingHorizontal: 25,
    fontWeight : "bold",
    marginBottom: 5,
  },
  secondaryContainer: {
    flex: 1,
    paddingHorizontal: 20, // Combines paddingLeft and paddingRight
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

  },
  input: {
    width: '50%',
    padding: 15,
    color: '#3E3E3E',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ccc",
    marginBottom: 20,
    fontSize: 16,
    
  },
  forgotPassword: {
    flexDirection: "row",  // Arrange items in a row
    justifyContent: "flex-end",  // Push items to the end of the row
    alignItems: "center",  // Align items vertically in the center
    width: "100%",  // Align the single Text element to the end

  },
  forgotPasswordText: {
    fontWeight: "bold",
    color: "#3EB57C",
  },
  signUpButton: {
    width: '80%',
    height : '20%',
    backgroundColor: '#3EB57C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent : "center",
    marginTop: 15,
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
    marginTop: 5,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10,
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
  registerText: {
    flexDirection: "row", // Align text horizontally
    justifyContent: "center", // Center content horizontally
    // alignItems: "center", // Center content vertically
    // marginTop: 10, // Optional: Add some spacing from other elements
    marginBottom: 10,
  },
  registerLink: {
    color: '#3E3E3E',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 5, // Add spacing between the two Text elements
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
    backgroundColor: '#fff', // Ensure background is opaque for proper shadow rendering
  },
  
  icon2: {
    marginRight: 10,
  },
  inputTwo: {
    flex: 1,
    fontSize: 18,
    marginLeft : 10 ,
    color: "#333",
  }
});

export default Login;
