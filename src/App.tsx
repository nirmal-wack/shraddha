import React, { useEffect, useState } from "react";

//Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
// All  User-Application Screens are fetched from navigatons/UserIndex.tsx
import { AuthStack } from "../navigations/UserIndex";
import { MainApp } from "../navigations/UserIndex";
import { SplashScreens } from "../navigations/UserIndex";
import AsyncStorage from '@react-native-async-storage/async-storage';


const RootStack = createNativeStackNavigator();

function App(): JSX.Element {

  // to check User Authentication 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // SplashScreen check
  const [showIntro, setShowIntro] = useState(false);
  const handleDone = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    };
    checkToken();
  }, []);



  return showIntro ? <SplashScreens onDone={handleDone} /> : (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <RootStack.Screen name="Auth" component={AuthStack} />
        ) : (
          <RootStack.Screen name="MainApp" component={MainApp} />

        )}
      </RootStack.Navigator>
    </NavigationContainer>

  );

}



export default App;