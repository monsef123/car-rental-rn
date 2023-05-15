import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

const headerHeight = Dimensions.get("window").height / 3;

const GuestScreenWrapper = ({ children }) => {

	return (
		<View style={styles.container}>
			<View style={styles.header}>

			</View>
			<View style={styles.contentContainer}>
				{children}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
	},
	header: {
		width: "100%",
		height: headerHeight,
		backgroundColor: "#ddd",
		position: "absolute",
		top: 0,
		left: 0,
	},
	contentContainer: {
		width: "100%",
		flex: 1,
		marginTop: headerHeight - 50,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 29
	}
});

export default GuestScreenWrapper