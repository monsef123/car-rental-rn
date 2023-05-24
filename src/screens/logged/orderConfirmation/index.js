import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HeaderWithBack from '../../../components/HeaderWithBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import HostDetails from './components/HostDetails';

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
		// marginTop: 24,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		flex: 1,
		backgroundColor: colors.secondarySurface
	}
});

export default OrderConfirmation