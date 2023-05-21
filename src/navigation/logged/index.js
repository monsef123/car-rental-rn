import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../screens/logged/home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "../components/TabBar";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LoggedNavigation = () => {
	return (
		<Tab.Navigator initialRouteName="Home"
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarLabel: "Home" }} />
		</Tab.Navigator>
	);
}

export default LoggedNavigation