import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../../components/HeaderWithBack';
import colors from '../../../../common/colors';
import { Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomChip from '../../../../components/CustomChip';
import CheckBox from '../../../../components/CheckBox';
import BigIconButton from '../../../../components/BigIconButton';


const CheckoutVerification = ({ navigation }) => {
	const [paymentMethod, setPaymentMethod] = useState();

	const onSubmitVerification = () => {
		// TODO: Add logic here
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
						title="VÉRIFIEZ VOS INFORMATIONS"
					/>
				</SafeAreaView>
				<View style={{ paddingHorizontal: 18 }}>
					<View style={styles.containerCard}>
						<Text style={styles.cardLabelText}>Renseigner votre address de livraison</Text>
						<TextInput
							style={styles.input}
							placeholder='Adresse'
							placeholderTextColor="#666"
						/>
					</View>
					<View style={[styles.containerCard, { marginTop: 24 }]}>
						<Text style={styles.cardLabelText}>Renseigner l’address de retour du véhicule</Text>
						<TextInput
							style={styles.input}
							placeholder='Adresse'
							placeholderTextColor="#666"
						/>
					</View>
					<View style={[styles.containerCard, { marginTop: 24 }]}>
						<View style={styles.row}>
							<Icon name="checkbox-marked-circle" size={26} />
							<Text style={[styles.cardLabelText, { fontWeight: "400", paddingLeft: 10 }]}>Numéro de téléphone</Text>
						</View>
						<TextInput
							style={styles.input}
							placeholder='0000 000 0000'
							placeholderTextColor="#666"
							keyboardType='phone-pad'
							returnKeyType='done'
						/>
					</View>
					<View style={[styles.containerCard, { marginTop: 24 }]}>
						<View style={styles.row}>
							<Icon name="checkbox-marked-circle" size={26} color={colors.lighGray} />
							<Text style={[styles.cardLabelText, { fontWeight: "400", paddingLeft: 10 }]}>Permis de conduire</Text>
						</View>
						<View style={[styles.row, { marginVertical: 16 }]}>
							<CustomChip
								label="Choisir le fichier"
								textStyle={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
								style={{ backgroundColor: colors.textBlack, paddingHorizontal: 0 }}
							/>
							<Text style={{ paddingLeft: 16 }}>Pas de fichier choisi</Text>
						</View>
						<View style={styles.row}>
							<CustomChip
								label="Prendre une photo"
								textStyle={{ color: colors.white, fontSize: 16, fontWeight: "400" }}
								style={{ backgroundColor: colors.textBlack, paddingHorizontal: 0 }}
							/>
						</View>
					</View>
					<View style={[styles.containerCard, { marginTop: 24 }]}>
						<Text style={styles.cardLabelText}>Mode de paiement</Text>
						<CheckBox
							label="Paiement par carte de crédit"
							isChecked={paymentMethod === 0}
							onPress={() => setPaymentMethod(0)}
						/>
						<CheckBox
							label="Paiement par chèque"
							isChecked={paymentMethod === 1}
							onPress={() => setPaymentMethod(1)}
						/>
						<CheckBox
							label="Paiement en espèces"
							isChecked={paymentMethod === 2}
							onPress={() => setPaymentMethod(2)}
						/>
					</View>
				</View>
			</ScrollView>
			{/** Validate button */}
			<BigIconButton
				iconName="arrow-right"
				style={styles.nextBtn}
				iconColor={colors.white}
				containerColor={colors.textBlack}
				onPress={onSubmitVerification}
			/>
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
	containerCard: {
		width: "100%",
		padding: 16,
		backgroundColor: colors.white,
		borderRadius: 16,
	},
	cardLabelText: {
		fontSize: 16,
		fontWeight: "500"
	},
	input: {
		width: "100%",
		backgroundColor: colors.inputGray,
		marginTop: 10,
		borderRadius: 4,
		height: 48,
		paddingHorizontal: 16
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	nextBtn: {
		position: "absolute",
		bottom: 60,
		right: 20
	}
});

export default CheckoutVerification