import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { IconButton, Text } from 'react-native-paper';
import strings from '../../../common/strings';


const SearchScreen = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<Text variant="titleLarge" style={styles.title}>{strings.search}</Text>
				<IconButton
					icon="close"
					onPress={navigation.goBack}
				/>
			</View>
			<Text variant="bodyLarge" style={styles.question}>
			Comment souhaitez-vous récupérer votre voiture ?
			</Text>
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
		fontWeight: "900",
		textTransform: "uppercase"
	},
	question: {
		fontWeight: "500",
		lineHeight: 18
	}
});

export default SearchScreen