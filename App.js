import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GuestNavigation from './src/navigation/guest';
import { MD3LightTheme as DefaultTheme, ThemeProvider } from 'react-native-paper';
import colors from './src/common/colors';

const theme = {
	...DefaultTheme,
	// Specify custom property in nested object
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<GuestNavigation />
			</NavigationContainer>
		</ThemeProvider>
	);
}

export default App;
