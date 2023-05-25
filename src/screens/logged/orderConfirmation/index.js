import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import HeaderWithBack from '../../../components/HeaderWithBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import HostDetails from './components/HostDetails';
import { Text } from 'react-native-paper';
import CustomChip from '../../../components/CustomChip';
import CarFeatures from './components/Features';
import OrderCard from './components/OrderCard';

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
				<View style={[styles.row, { marginTop: 16 }]}>
					<CustomChip
						label="Full option"
						iconName="cog"
						style={{ backgroundColor: colors.textBlack }}
						textStyle={{
							color: colors.white
						}}
						iconColor={colors.white}
					/>
					<CustomChip
						label="Family car"
						style={{ backgroundColor: colors.brightBlue, marginLeft: 8 }}
						textStyle={{
							color: colors.textBlack,
							fontWeight: "400"
						}}
					/>
				</View>
				<CarFeatures />
				<OrderCard
					onSubmit={() => navigation.navigate("Checkout")}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.lighGray,
	},
	container: {
		width: "100%",
		paddingHorizontal: 18,
		backgroundColor: colors.lighGray
	},
	carDetailsContainer: {
		width: "100%",
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		paddingTop: 16,
		flex: 1,
		backgroundColor: colors.secondarySurface,
		paddingHorizontal: 18,
		marginTop: 30,
	},
	carTitle: {
		textAlign: "center",
	},
	carImg: {
		alignSelf: "center",
		marginTop: 30,
		width: "50%",
		resizeMode: "contain"
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
});

export default OrderConfirmation