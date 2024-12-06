import React, { Component, createRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Alert,
} from 'react-native';
import { IonIcon } from '../../components/Icons';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParmeterList } from '../../navigations/UserIndex';
import { NavigationAction } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



type Props = NativeStackScreenProps<RootStackParmeterList, 'OtpVerificationScreen'>;

interface State {
  email: string;
  otp: string[];

}


export class OtpVerificationScreen extends Component<Props, State> {

  inputRefs: React.RefObject<TextInput>[];

  constructor(props: Props) {
    super(props);
    this.state = {
      email: this.props.route.params?.email || '',
      otp: ['', '', '', '', ''],
    };

    // Create references for each input box
    this.inputRefs = Array.from({ length: 5 }, () => createRef<TextInput>());
  }

  handleChangeText = (text: string, index: number) => {
    const { otp } = this.state;
    if (text.length <= 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = text;
      this.setState({ otp: updatedOTP });

      // Move to the next input box if text is entered
      if (text && index < 4) {
        this.inputRefs[index + 1].current?.focus();
      }
    }
  };

  handleBackspace = (index: number) => {
    const { otp } = this.state;
    if (index > 0) {
      const updatedOTP = [...otp];
      updatedOTP[index - 1] = '';
      this.setState({ otp: updatedOTP }, () => {
        this.inputRefs[index - 1].current?.focus();
      });
    }
  };

  handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace' && this.state.otp[index] === '') {
      this.handleBackspace(index);
    }
  };

  handleVerify = async () => {
    const { otp, email } = this.state;
    const fullOTP = otp.join('');
    console.log(email)
    if (fullOTP.length === 5) {
      try {
        // Axios POST request
        const response = await axios.post("https://eduneeds.co.in/api/v1/auth/verify", {
          "email": email,
          "otp": Number(fullOTP),
          "type": "login",// types => 1: registration, 2: login
          "device_id": "12345",
          "token": "82812398792837192jhcvjhdvwfuwej",
          "device_info": {
            "model": "12345",
            "deviceId": "12345",
            "osVersion": "IOS",
            "device_type": "IOS",
            "manufacturer": "287398172398"
          }
        });

        if (response.status === 200) {
          console.log("Response Data:", response.data);
          Alert.alert("Success", "OTP Verified Successfully.");
          await AsyncStorage.setItem('userToken', 'dummy_token');
          const token = await AsyncStorage.getItem('userToken');
          console.log(token)
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: "MainApp" }],
          });
          
          
        } else {
          Alert.alert("Invalid OTP", "Please enter a valid 5-digit OTP.");
        }
      } catch (error: any) {

        console.error(error);
        Alert.alert(
          "Error",
          error.response?.data?.message || "Something went wrong."
        );
      }
    }
    else {
      Alert.alert(
        'Invalid OTP', // Title
        'Please enter a valid 5-digit OTP.', // Message
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }, // Button
        ]
      );
    };

  };

  handleResend = async () => {
    const {email} = this.state
    // console.log(email)

    try {
      const response = await axios.post("https://eduneeds.co.in/api/v1/auth/resend" , {
        "email": email,
        "type": "login" // types => 1: registration, 2: login
      })
      console.log(response.data)

      if (response.status === 200) {
        Alert.alert("Success", "OTP Resent Successfully.");
        
      } else {
        Alert.alert("SOmething Went Wrong.", "Please try Resend OTP after few seconds.");
      }
    }
    catch{
      Alert.alert("SOmething Went Wrong.", "Please try Resend OTP after few seconds.");
    }
  }

  render() {
    const { otp } = this.state;
    const {email} = this.state;
    return (
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Verification Code</Text>
          <Text style={styles.instructionText}>
            Please Enter the 5-digit OTP sent to your registered email <Text style={styles.email}>{email}</Text>
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={styles.content}>


          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpBox}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => this.handleChangeText(text, index)}
                onKeyPress={(event) => this.handleKeyPress(event, index)}
                ref={this.inputRefs[index]}
              />
            ))}
          </View>
          <View style = {styles.resendContainer}>
            <Text style={styles.instructionText}>
              If you didn't receive the code?</Text>
            <TouchableOpacity onPress = {this.handleResend}><Text style={styles.email}> Resend</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.verifyButton} onPress={this.handleVerify}>
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
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
    alignItems: "flex-start",
    paddingTop: 150,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  resendContainer : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
  },
  instructionText: {
    fontSize: 18,
    // marginTop: 5,
    color: '#a6a4a4',
    // textAlign: 'left',
  },
  email: {
    color: "#3EB57C",
    fontSize: 17,

  },
  content: {
    alignItems: "center",
    paddingTop: 100,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  otpBox: {
    width: 60,
    height: 60,
    fontSize: 24,
    color: "#3EB57C",
    fontWeight: "bold",
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  verifyButton: {
    backgroundColor: '#3EB57C',
    marginTop: 10,
    width: '60%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default OtpVerificationScreen;
