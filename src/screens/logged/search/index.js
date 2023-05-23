import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { IconButton, Text } from 'react-native-paper';


const SearchScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<Text variant="titleLarge" style={styles.title}>RECHERCHE</Text>
				<IconButton
					icon="close"
					onPress={navigation.goBack}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.white
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
	},
	title: {
		fontWeight: "900"
	}
});

export default SearchScreen