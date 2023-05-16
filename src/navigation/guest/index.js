import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../../screens/guest/login";
import LoginOtp from "../../screens/guest/otp";

const Stack = createNativeStackNavigator();

const GuestNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name="LoginOtp" component={LoginOtp} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

export default GuestNavigation