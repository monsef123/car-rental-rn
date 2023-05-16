import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../screens/logged/home";

const Stack = createNativeStackNavigator();

const LoggedNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

export default LoggedNavigation