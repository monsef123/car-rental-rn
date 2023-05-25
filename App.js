import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { MD3LightTheme as DefaultTheme, ThemeProvider } from 'react-native-paper';
import colors from './src/common/colors';
import { StatusBar } from 'react-native';

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
			<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</ThemeProvider>
	);
}

export default App;
