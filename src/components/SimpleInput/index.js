import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const SimpleInput = () => {

	return (
		<View style={styles.container}>
			<Text>{label}</Text>
			<TextInput
				style={styles.input}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	input: {
		backgroundColor: colors.white,
		width: "100%",
		height: 48,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: colors.inputGray,
		justifyContent: "center",
		paddingHorizontal: 16,
		color: colors.textBlack,
		fontWeight: "500"
	},
	text: {
		color: colors.textBlack,
		fontWeight: "500"
	}
});
export default SimpleInput