import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "../components/TabBar";
import HomeStack from "../stacks/HomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchStack from "../stacks/SearchStack";
import CheckoutStack from "../stacks/CheckoutStack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator initialRouteName="tab_home"
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen name="tab_home" component={HomeStack} options={{ headerShown: false, tabBarLabel: "Home" }} />
		</Tab.Navigator>
	);
}


const LoggedNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Checkout">
			<Stack.Screen name="Home_Screen" component={TabNavigation} options={{ headerShown: false }} />
			<Stack.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
			<Stack.Screen name="Checkout" component={CheckoutStack} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default LoggedNavigation