import React, { Component, createRef } from 'react';
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

interface State {
  otp: string[];
}

export class OtpVerificationScreen extends Component<{}, State> {

  inputRefs: React.RefObject<TextInput>[];

  constructor(props: {}) {
    super(props);
    this.state = {
      otp: ['', '', '', ''],
    };

    // Create references for each input box
    this.inputRefs = Array.from({ length: 4 }, () => createRef<TextInput>());
  }

  handleChangeText = (text: string, index: number) => {
    const { otp } = this.state;
    if (text.length <= 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = text;
      this.setState({ otp: updatedOTP });

      // Move to the next input box if text is entered
      if (text && index < 3) {
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

  handleVerify = () => {
    const { otp } = this.state;
    const fullOTP = otp.join('');
    if (fullOTP.length === 4) {
      Alert.alert(
        'OTP Verification', // Title
        'Your OTP is verified successfully!', // Message
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }, // Button
        ]
      );
    }
    else {
      Alert.alert(
        'Invalid OTP', // Title
        'Please enter a valid 4-digit OTP.', // Message
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }, // Button
        ]
      );
    };
    
  };

  render() {
    const { otp } = this.state;
    return (
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Verification Code</Text>
          <Text style={styles.instructionText}>
            Please Enter the 4-digit OTP sent to your registered email <Text style={styles.email}>abcd@gmail.com</Text>
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
          <Text style={styles.instructionText}>
            If you didn't receive the code ? <Text style={styles.email}>Resend.</Text>
          </Text>
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
  instructionText: {
    fontSize: 18,
    marginTop : 5 ,
    color: '#a6a4a4',
    textAlign: 'left',
  },
  email : {
    color : "#3EB57C"
  },
  content: {
  alignItems : "center" ,
  paddingTop : 100 , 
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
    color : "#3EB57C",
    fontWeight : "bold",
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  verifyButton: {
    backgroundColor: '#3EB57C',
    marginTop : 10 ,
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
