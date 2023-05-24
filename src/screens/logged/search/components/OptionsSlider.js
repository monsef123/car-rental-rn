import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import colors from '../../../../common/colors'

const OptionSlider = ({ label }) => {

	return (
		<View style={styles.container}>
			<Text variant="labelLarge" style={styles.label}>{label}</Text>
			<View style={styles.sliderContainer}>
				<View style={styles.sliderLine}></View>
				<View style={styles.sliderController}>
					<Text>Full options</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16
	},
	label: {
		fontSize: 16,
		color: "#333",
		fontWeight: "400"
	},
	sliderContainer: {
		width: "100%",
		position: "relative",
		marginTop: 40,
		backgroundColor: "red"
	},
	sliderLine: {
		width: "100%",
		height: 3,
		borderRadius: 20,
		backgroundColor: colors.textBlack,
		zIndex: -1
	},
	sliderController: {
		width: 140,
		height: 40,
		borderRadius: 100,
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.textBlack,
		position: "absolute",
		right: 0,
		top: -20,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default OptionSlider