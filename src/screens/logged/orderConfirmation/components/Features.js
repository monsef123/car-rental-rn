import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../../../common/colors'

const Feature = ({ iconName, label }) => {
	return (
		<View style={[styles.row, { marginTop: 26 }]}>
			<Icon name={iconName} size={22} color={colors.textBlack} />
			<Text style={styles.featureLabel}>{label}</Text>
		</View>
	)
}

const CarFeatures = () => {

	return (
		<View style={styles.container}>
			<Text variant="bodyLarge" style={styles.featuresTitle}>FEATURES</Text>
			<Feature
				iconName="bluetooth"
				label="Bluetooth"
			/>
			<Feature
				iconName="key-wireless"
				label="Keyless entry"
			/>
			<Feature
				iconName="cable-data"
				label="USB"
			/>
			<Feature
				iconName="timer-outline"
				label="Automatic transmission"
			/>
			<Feature
				iconName="camera-enhance-outline"
				label="Backup camera"
			/>
			<Feature
				iconName="car-seat-heater"
				label="Heated seats"
			/>
			<Feature
				iconName="cellphone-charging"
				label="Charger"
			/>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 24
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	featuresTitle: {
		fontWeight: "900",

	},
	featureLabel: {
		marginLeft: 12,
	}
});

export default CarFeatures