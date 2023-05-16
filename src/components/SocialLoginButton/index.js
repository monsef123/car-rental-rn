import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import colors from '../../common/colors';


const SociaLoginButton = ({ label, image, containerStyle }) => {

	return (
		<TouchableNativeFeedback style={containerStyle}>
			<View style={styles.container}>
				<Image source={image} style={styles.icon} />
				<Text style={styles.label}>{label}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.secondarySurface,
		padding: 14,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		fontSize: 16,
		fontWeight: "400"
	},
	icon: {
		width: 30, height: 30, resizeMode: "contain",
		marginRight: 10
	}
});

export default SociaLoginButton