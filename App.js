import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { MD3LightTheme as DefaultTheme, ThemeProvider } from 'react-native-paper';
import colors from './src/common/colors';
import { StatusBar } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux'


const theme = {
	...DefaultTheme,
	// Specify custom property in nested object
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		primaryContainer: colors.primary
	},
};

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
