import React from 'react'
import { View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native'

const headerHeight = Dimensions.get("window").height / 3;

const GuestScreenWrapper = ({ children }) => {

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require("../../images/photos/car-bg.jpeg")} style={styles.bgImage} />
				<Image source={require("../../images/logos/jadou.png")} style={styles.logo} />
			</View>
			<View style={styles.contentContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{children}
				</ScrollView>
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
		justifyContent: "center"
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
	},
	bgImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0
	},
	logo: {
		width: 50,
		height: 50,
		resizeMode:"contain",
		marginLeft: 20
	}
});

export default GuestScreenWrapper