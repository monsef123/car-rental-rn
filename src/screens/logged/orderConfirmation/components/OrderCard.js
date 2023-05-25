import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../../common/colors';
import SimpleInput from '../../../../components/SimpleInput';
import strings from '../../../../common/strings';
import { TouchableRipple } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const OrderCard = () => {

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={{ width: '100%', flexShrink: 1 }}>
					<SimpleInput
						label={strings.startDate}
						placeholder="13/12/2023"
					/>
				</View>
				<View style={{ width: 16 }} />
				<View style={{ width: '100%', flexShrink: 1 }}>
					<SimpleInput
						label={strings.endDate}
						placeholder="13/12/2023"
					/>
				</View>
			</View>
			<SimpleInput
				style={{ marginTop: 16 }}
				label={strings.returnLocation}
				placeholder="Gauthier, NO92 Casablanca"
			/>
			<Text variant="labelLarge" style={styles.label}>Total price</Text>
			<Text variant="bodyLarge" style={styles.totalPriceText}>1.090 Dhs</Text>
			<TouchableRipple style={{ marginTop: 16 }} rippleColor={colors.white}>
				<View style={styles.nextBtn}>
					<Text style={styles.nextBtnText}>Passer à la caisse</Text>
					<Icon name="arrow-right" color={colors.white} size={22} />
				</View>
			</TouchableRipple>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 16,
		paddingVertical: 30,
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.lighGray,
		borderRadius: 24,
		marginVertical: 42,
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	label: {
		fontSize: 14,
		color: "#333",
		fontWeight: "400",
		marginTop: 16
	},
	totalPriceText: {
		fontWeight: "600",
		lineHeight: 16,
		fontSize: 16,
		marginTop: 16
	},
	nextBtn: {
		width: "80%",
		height: 48,
		backgroundColor: colors.textBlack,
		borderRadius: 8,
		marginHorizontal: "10%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row"
	},
	nextBtnText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "400",
		paddingRight: 10
	}
});

export default OrderCard