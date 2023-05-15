import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GuestNavigation from './src/navigation/guest';
import { ThemeProvider } from 'react-native-paper';

const App = () => {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<GuestNavigation />
			</NavigationContainer>
		</ThemeProvider>
	);
}

export default App;
