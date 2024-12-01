/* 
This File Contains All User Application Screen's Navigations and Splash Screens.
1. Splash Screen for Application Intro( function name : SplashScreens() )
2. Authentication Screens ( function Name : AuthStack() )
3. MainScreen Screens ( function Name : MainApp() )

*/

import React, { useState } from "react";
//Screens
import Login from "../src/screens/Login";
import Register from "../src/screens/Register";
import ForgotPassword from "../src/screens/ForgotPassword";

import HomePage from "../src/screens/HomePage";
import CartScreen from "../src/screens/CartScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import OtpVerificationScreen from "../src/screens/OtpVerificationScreen";

import Notification from "../src/screens/Notification";
import Filter from "../src/screens/Filter";
import ProductPage from "../src/screens/ProductPage";

//Navigations
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IonIcon } from "../components/Icons";

//libraries
import { ImagesAssets } from "../assets/ImageAsset";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";


//authentication login Parms
export type RootStackParmeterList = {

    Login: undefined;
    Register: { productId: string }
    ForgotPassword: undefined;
    OtpVerificationScreen: {
        email: string,
    }
    Notification: undefined
    Filter: undefined
    HomePage: undefined
    ProductPage: {
        dealerData: {
            company_name: string,
            year: string,
            dealer_name: string,
            rating: string,
            address: string,
            phone: string,
            no_product: string,
        }
    }
    MainApp: undefined,

};

//Authentication Screens
const Stack = createNativeStackNavigator<RootStackParmeterList>()
function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login"
                component={Login}
                options={{
                    title: "Login Page"
                }}
            />
            <Stack.Screen name="Register"
                component={Register}
                options={{
                    title: "Register Page"
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ title: "Forgot Password " }} />

            <Stack.Screen
                name="OtpVerificationScreen"
                component={OtpVerificationScreen}
                options={{
                    title: "Verification Page"
                }} />
            <Stack.Screen name="MainApp"
                component={MainApp}
                options={{
                    title: "Home Page"
                }}
            />

        </Stack.Navigator>
    );
}

// BottomBar leading to MainApp

const HomeStackNavigator = createNativeStackNavigator<RootStackParmeterList>();
export type HomePageProps = NativeStackScreenProps<RootStackParmeterList, "HomePage">;
export type NotificationProps = NativeStackScreenProps<RootStackParmeterList, "Notification">;
export type FilterProps = NativeStackScreenProps<RootStackParmeterList, "Filter">;
export type ProductPageProps = NativeStackScreenProps<RootStackParmeterList, "ProductPage">

// Nested Screens From Home
function HomeStack() {
    return (
        <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <HomeStackNavigator.Screen name="HomePage" component={HomePage} />
            <HomeStackNavigator.Screen name="Notification" component={Notification} />
            <HomeStackNavigator.Screen name="Filter" component={Filter} />
            <HomeStackNavigator.Screen name="ProductPage" component={ProductPage} />
        </HomeStackNavigator.Navigator>
    );
}
const Tab = createBottomTabNavigator();
function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName = "";
                    if (route.name === "Home") iconName = "home";
                    else if (route.name === "Cart") iconName = "cart";
                    else if (route.name === "Profile") iconName = "person-circle";

                    return <IonIcon name={iconName} size={28} color={color} />;
                },
                tabBarActiveTintColor: "#3EB57C",
                tabBarInactiveTintColor: "gray",

                tabBarStyle: {
                    backgroundColor: "#fff", // Background color
                    height: 60, // Increase the height of the tab bar
                    // borderTopWidth: 2, // Border styling
                    // borderTopColor: "#f0f0f0",
                    width: "100%",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginBottom: 0,

                },
                // Customizing tab label style
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                },
                // Control visibility of the label
                tabBarShowLabel: false, // Change to `false` to hide labels
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

//SplashScreens 
const slides = [
    {
        key: 'Shraddha',
        title: 'Title 1',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque voluptatem,",
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

function SplashScreens({ onDone }: { onDone: () => void }) {

    const renderSlide = ({ item }: { item: typeof slides[0] }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    const renderNextButton = () => (
        <Text style={styles.customButton}>Next</Text>
    );

    const renderSkipButton = () => (
        <Text style={styles.customButton}>Skip</Text>
    );

    const renderDoneButton = () => (
        <Text style={styles.customButton}>Done</Text>
    );

    return (
        <AppIntroSlider
            renderItem={renderSlide}
            data={slides}
            onDone={onDone}
            showSkipButton
            onSkip={onDone}
            renderNextButton={renderNextButton}
            renderSkipButton={renderSkipButton}
            renderDoneButton={renderDoneButton}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
        />
    )
}

// Exported UserIndex Function
function UserIndex() {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashDone = () => {
        setShowSplash(false); // Hide the splash screen
    };

    return showSplash ? (
        <SplashScreens onDone={handleSplashDone} />
    ) : (
        <>
            <AuthStack />
            <MainApp />
        </>
    );
}



function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName="Notification">
            <Stack.Screen name="Notification"
                component={Notification}
                options={{
                    title: "Notification Page"
                }}
            />
            <Stack.Screen name= "Filter"
                component={Filter}
                options={{
                    title: "Register Page"
                }}
            />
        </Stack.Navigator>
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
})

export { SplashScreens };
export { MainApp };
export { AuthStack };
export {ProfileStack};
export default UserIndex;
// change the issues