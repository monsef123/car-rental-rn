import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CheckoutVerification from '../../screens/logged/checkout/verification';

const Stack = createNativeStackNavigator();

const CheckoutStack = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen name="checkout_verification" component={CheckoutVerification} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default CheckoutStack;