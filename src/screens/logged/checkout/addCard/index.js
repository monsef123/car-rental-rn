import React from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithBack from '../../../../components/HeaderWithBack'
import colors from '../../../../common/colors'
import SimpleInput from '../../../../components/SimpleInput'
import CustomChip from '../../../../components/CustomChip'
import { Text } from 'react-native-paper'


const CheckoutAddCard = ({ navigation }) => {

	const onCheckoutPress = () => {
		navigation.navigate("checkout_confirmation");
	}

	return (
		<>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
				showsVerticalScrollIndicator={false}
			>
				<SafeAreaView style={styles.container}>
					<HeaderWithBack
						goBack={navigation.goBack}
						title="AJOUTER UNE CARTE DE CRÉDIT"
					/>
				</SafeAreaView>
				<View style={{ paddingHorizontal: 18 }}>
					<SimpleInput
						label="Numéro de la carte"
						placeholder="99883980395834"
						keyboardType="number-pad"
					/>
					<SimpleInput
						label="Nom sur la carte"
						placeholder="Halo johnes"
						style={{ marginTop: 16 }}
					/>
					<SimpleInput
						label="Expire le"
						placeholder="13/12"
						keyboardType="number-pad"
						style={{ marginTop: 16 }}
					/>
					<SimpleInput
						label="Code CSV"
						placeholder="321"
						keyboardType="number-pad"
						style={{ marginTop: 16 }}
					/>
				</View>
			</ScrollView>
			<View style={styles.footerContainer}>
				{/* <CustomChip
					label="Ajouter cette carte"
					style={{ paddingHorizontal: 0, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.textBlack, flexShrink: 1 }}
					textStyle={{ fontSize: 16 }}
				/> */}
				<TouchableOpacity style={[styles.checkoutBtn, { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.textBlack, flexShrink: 1 }]} onPress={onCheckoutPress}>
					<Text style={{ fontSize: 16, color: colors.textBlack, fontWeight: "600" }} variant="bodyLarge">Ajouter cette carte</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.checkoutBtn} onPress={onCheckoutPress}>
					<Text style={{ fontSize: 16, color: colors.white, fontWeight: "900" }} variant="bodyLarge">Checkout</Text>
				</TouchableOpacity>
			</View>
		</>
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
	footerContainer: {
		width: "100%",
		positon: "absolute",
		bottom: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 18
	},
	checkoutBtn: {
		width: "100%",
		flexShrink: 1,
		backgroundColor: colors.textBlack,
		height: 48,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: 'center',
		marginLeft: 10
	}
});

export default CheckoutAddCard