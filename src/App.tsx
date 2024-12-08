import React, { useEffect, useState } from "react";
import { View , Text } from "react-native";
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

  const [isLoading, setIsLoading] = useState(true);

  const handleDone = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setShowIntro(!token);
        setIsAuthenticated(!!token);

      } catch (error) {
        console.error("Error fetching user token:", error);
      } finally {
        setIsLoading(false); // Mark loading as complete
      }
    };
    checkToken();
  }, []);


  if (showIntro) {
    return <SplashScreens onDone={handleDone} />;
  }

  // if (isLoading) {
  //   return (
  //     // <SplashScreens onDone={() => {}} />
  //     <View>
  //       <Text>
  //       Loading
  //       </Text>
  //     </View>
  //   );
  // }

  return (
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