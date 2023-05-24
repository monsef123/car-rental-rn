import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../common/colors';
import { Text } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const CheckBox = ({ label, isChecked }) => {

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				{isChecked && (
					<Icon name="check-bold" size={16} />
				)}
			</View>
			<Text variant="bodyLarge" style={styles.label}>{label}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 26,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	box: {
		width: 24,
		height: 24,
		backgroundColor: colors.white,
		borderWidth: 2,
		borderBottomColor: colors.textBlack,
		alignItems: "center",
		justifyContent: "center"
	},
	label: {
		marginLeft: 12
	}
});

export default CheckBox