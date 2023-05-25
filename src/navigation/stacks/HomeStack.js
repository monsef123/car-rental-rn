import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/logged/home';
import colors from '../../common/colors';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, contentStyle: { backgroundColor: colors.secondarySurface }  }} />
		</Stack.Navigator>
	)
}

export default HomeStack;