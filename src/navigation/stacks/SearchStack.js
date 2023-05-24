import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../../screens/logged/search';
import SearchResultScreen from '../../screens/logged/searchResult';

const Stack = createNativeStackNavigator();

const SearchStack = () => {

	return (
		<Stack.Navigator initialRouteName="search_home">
			<Stack.Screen name="search_home" component={SearchScreen} options={{ headerShown: false }} />
			<Stack.Screen name="search_result" component={SearchResultScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default SearchStack;