import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CheckoutVerification from '../../screens/logged/checkout/verification';
import CheckoutAddCard from '../../screens/logged/checkout/addCard';
import colors from '../../common/colors';

const Stack = createNativeStackNavigator();

const CheckoutStack = () => {

	return (
		<Stack.Navigator initialRouteName='checkout_add_card'>
			<Stack.Screen name="checkout_verification" component={CheckoutVerification} options={{ headerShown: false }} />
			<Stack.Screen name="checkout_add_card" component={CheckoutAddCard} options={{ headerShown: false, contentStyle: { backgroundColor: colors.secondarySurface } }} />
		</Stack.Navigator>
	)
}

export default CheckoutStack;