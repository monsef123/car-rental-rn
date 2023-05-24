import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import CheckBox from '../../../../components/CheckBox'
import { CAR_TYPES } from '../../../../common/constants'

const CarTypeSelector = ({ label, carTypes, onCheckboxPress }) => {

	return (
		<View style={styles.container}>
			<Text variant="labelLarge" style={styles.label}>{label}</Text>
			<CheckBox
				label="Family car"
				isChecked={carTypes.includes(CAR_TYPES.FAMILY)}
				onPress={() => onCheckboxPress(CAR_TYPES.FAMILY)}
			/>
			<CheckBox
				label="Luxary car"
				isChecked={carTypes.includes(CAR_TYPES.LUXARY)}
				onPress={() => onCheckboxPress(CAR_TYPES.LUXARY)}
			/>
			<CheckBox
				label="Event car"
				isChecked={carTypes.includes(CAR_TYPES.EVENT)}
				onPress={() => onCheckboxPress(CAR_TYPES.EVENT)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginTop: 36,
	},
	label: {
		fontSize: 16,
		color: "#333",
		fontWeight: "400"
	},
	row: {
		marginTop: 26,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});

export default CarTypeSelector