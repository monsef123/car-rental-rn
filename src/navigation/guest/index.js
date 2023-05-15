import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../../screens/guest/login";

const Stack = createNativeStackNavigator();

const GuestNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

export default GuestNavigation