import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import HeaderWithBack from '../../../components/HeaderWithBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import HostDetails from './components/HostDetails';
import { Text } from 'react-native-paper';

const OrderConfirmation = ({ navigation }) => {

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView style={styles.container}>
				<HeaderWithBack
					goBack={navigation.goBack}
					title="Confirmation"
				/>
				<HostDetails />
			</SafeAreaView>
			<View style={styles.carDetailsContainer}>
				<Text variant="bodyLarge" style={styles.carTitle}>HONDA ODYSSEY 2019</Text>
				<Image source={require("../../../images/cars/car1.png")} style={styles.carImg} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.lighGray,
		// paddingBottom: 40
	},
	container: {
		width: "100%",
		// flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.lighGray
	},
	carDetailsContainer: {
		width: "100%",
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		paddingTop: 16,
		flex: 1,
		backgroundColor: colors.secondarySurface
	},
	carTitle: {
		textAlign: "center",
	},
	carImg: {
		alignSelf: "center",
		marginTop: 30,
		width: "50%",
		resizeMode: "contain"
	}
});

export default OrderConfirmation