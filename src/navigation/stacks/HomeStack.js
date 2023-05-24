import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/logged/home';
import SearchScreen from '../../screens/logged/search';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default HomeStack;