import React , {useEffect , useState} from "react";
import {
  View ,
  Text ,
  SafeAreaView,
  ScrollView ,
  StyleSheet,
  Image
} from "react-native";

//Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

//Splash-Screens
import AppIntroSlider from "react-native-app-intro-slider";
import { ImagesAssets } from "../assets/ImageAsset";

const slides = [
  {
    key: 'Shraddha',
    title: 'Title 1',
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque voluptatem,",
    image: ImagesAssets.google,
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: ImagesAssets.google,
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'somethun1',
    title: 'Title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: ImagesAssets.google,
    backgroundColor: '#FFFFFF',
  }
];


export type RootStackParmeterList = {

  Login : undefined ;
  Register : {productId : string}
  ForgotPassword : undefined ;
};

const Stack = createNativeStackNavigator<RootStackParmeterList>()

function App() : JSX.Element{
  const [showIntro, setShowIntro] = useState(true);

  const renderSlide = ({ item }: { item: typeof slides[0] }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const onDone = () => {
    setShowIntro(false);
  };

  const onSkip = () => {
    setShowIntro(false); // Skip directly to the main app
  };

  const renderNextButton = () => (
    <Text style={styles.customButton}>Next</Text>
  );

  const renderSkipButton = () => (
    <Text style={styles.customButton}>Skip</Text>
  );

  const renderDoneButton = () => (
    <Text style={styles.customButton}>Done</Text>
  );


  return showIntro ? (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      showSkipButton
      onSkip={onSkip}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      dotStyle={styles.dotStyle} 
      activeDotStyle={styles.activeDotStyle}
    />
  ) : 

  // Main App
   (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login"
          component={Login}
          options = {{
            title : "Login Page"
          }} 
          />
          <Stack.Screen name="Register"
          component={Register}
          options = {{
            title : "Register Page"
          }}
          />
          <Stack.Screen 
          name = "ForgotPassword" 
          component = {ForgotPassword} 
          options = {{ title : "Forgot Password "}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3E3E3E",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#003E3E3E0",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  customButton: {
    color: "#3EB57C", // Customize your button color here
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  dotStyle: {
    backgroundColor: "#ccc", // Color of inactive dots
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDotStyle: {
    backgroundColor: "#3EB57C", // Color of the active dot
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});


export default App;