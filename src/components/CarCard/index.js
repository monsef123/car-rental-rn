import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { IconButton, Text, TouchableRipple } from 'react-native-paper';
import colors from '../../common/colors';


const CarCard = ({
	image,
	title,
	rating,
	trips,
	price,
	pricePerDay
}) => {

	return (
		<TouchableRipple>
			<View style={styles.container}>
				<View style={styles.imgContainer}>
					<Image source={image} style={styles.carImg} />
				</View>
				<View style={styles.row}>
					<Text variant="bodyLarge" style={styles.carName}>{title}</Text>
					<IconButton
						icon="bookmark-outline"
						style={{ width: 22 }}
						iconColor={colors.textBlack}
					/>
				</View>
				<View style={[styles.row, { justifyContent: "flex-start" }]}>
					<Text variant="bodyLarge" style={{ lineHeight: 16 }}>{rating}</Text>
					<IconButton
						icon="star-outline"
						style={styles.starIconBtn}
						iconColor={colors.textBlack}
					/>
					<Text variant="bodyLarge" style={{ lineHeight: 16 }}>({trips} voyage)</Text>
				</View>
				<View style={[styles.row, { marginTop: 16 }]}>
					<Text variant="bodySmall" style={styles.captionText}>{pricePerDay} Dhs / jours</Text>
					<Text variant="bodyLarge" style={styles.carName}>{price} Dhs</Text>
				</View>
			</View>
		</TouchableRipple >
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.white,
		marginTop: 16,
		borderRadius: 8,
		padding: 16
	},
	imgContainer: {
		width: "100%",
		height: 150,
		alignItems: "center",
		justifyContent: "center"
	},
	carImg: {
		width: "60%",
		height: "60%",
		resizeMode: "contain"
	},
	carName: {
		fontWeight: "600",
		lineHeight: 16
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	starIconBtn: {
		width: 22,
		height: 22,
		margin: 0,
		marginHorizontal: 6,
		position: "relative",
		top: -2
	},
	captionText: {
		fontWeight: 300,
	}
});

export default CarCard