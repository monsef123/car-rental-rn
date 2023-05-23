import React from "react";
// import HomeScreen from "../../screens/logged/home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "../components/TabBar";
import HomeStack from "../stacks/HomeStack";

const Tab = createBottomTabNavigator();

const LoggedNavigation = () => {
	return (
		<Tab.Navigator initialRouteName="tab_home"
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen name="tab_home" component={HomeStack} options={{ headerShown: false, tabBarLabel: "Home" }} />
		</Tab.Navigator>
	);
}

export default LoggedNavigation