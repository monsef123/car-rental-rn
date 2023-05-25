import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../../components/HeaderWithBack';
import colors from '../../../../common/colors';
import { Text, TouchableRipple } from 'react-native-paper';
import CheckBox from '../../../../components/CheckBox';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const CheckoutConfirmation = ({ navigation }) => {

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView style={styles.container}>
				<HeaderWithBack
					goBack={navigation.goBack}
					title="CHECKOUT"
				/>
			</SafeAreaView>
			<View style={{ paddingHorizontal: 18 }}>
				<View style={styles.containerCard}>
					<Text style={{ fontWeight: "500", fontSize: 16 }}>Conditions d'utilisation</Text>
					<View style={styles.checkboxContainer}>
						<TouchableRipple>
							<View style={styles.box}>
								{/* {isChecked && ( */}
								<Icon name="check-bold" size={16} />
								{/* )} */}
							</View>
						</TouchableRipple>
						<Text variant="bodyLarge" style={styles.label}>
							En vous connectant, il est entendu que vous reconnaissez et acceptez les termes et conditions générales d'utilisation.
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.secondarySurface,
		paddingBottom: 40
	},
	container: {
		width: "100%",
		paddingHorizontal: 18,
		backgroundColor: colors.secondarySurface
	},
	containerCard: {
		width: "100%",
		paddingHorizontal: 16,
		paddingVertical: 30,
		backgroundColor: colors.white,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: colors.lighGray
	},
	checkboxContainer: {
		marginTop: 26,
		width: "100%",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	box: {
		width: 24,
		height: 24,
		backgroundColor: colors.white,
		borderWidth: 2,
		borderBottomColor: colors.textBlack,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		top: 3
	},
	label: {
		marginLeft: 12,
		width: "100%",
		flexShrink: 1,
		color: colors.contentSecondary,
		fontSize: 16
	}
});

export default CheckoutConfirmation