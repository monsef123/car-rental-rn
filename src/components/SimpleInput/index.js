import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import colors from '../../common/colors';
import { Text } from 'react-native-paper';

const SimpleInput = ({ label, placeholder, style, keyboardType }) => {

	return (
		<View style={[styles.container, style]}>
			{!!label && <Text variant="bodyLarge" style={styles.label}>{label}</Text>}
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor={colors.textOnInput}
				keyboardType={keyboardType}
				returnKeyType='done'
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
		fontWeight: "500",
		marginTop: 8
	},
	text: {
		color: colors.textBlack,
		fontWeight: "500"
	},
	label: {
		fontSize: 14,
		color: "#333",
		fontWeight: "400",
		
	}
});
export default SimpleInput