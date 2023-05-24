import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HeaderWithBack from '../../../components/HeaderWithBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { Avatar, IconButton, Text } from 'react-native-paper';

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
				<Text>Hosted by</Text>
				<View style={styles.row}>
					<Avatar.Text size={48} label="aac" labelStyle={styles.avatarLabel} />
					<View style={styles.hostTextContainer}>
						<Text variant="bodyLarge" style={{ fontWeight: "500" }}>Casa car rentals</Text>
						<View style={[styles.row, { marginTop: 0 }]}>
							<Text variant="bodySmall" style={{ lineHeight: 16 }}>5.0</Text>
							<IconButton
								icon="star-outline"
								style={styles.starIconBtn}
								iconColor={colors.brightGreen}
								size={16}
							/>
							<Text variant="bodySmall" style={{ lineHeight: 16 }}>(705 trips)</Text>
						</View>
						<Text variant="labelMedium" style={{fontWeight: "300"}}>Typically responds within 1 minute</Text>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.lighGray,
		paddingBottom: 40
	},
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.lighGray
	},
	row: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	avatarLabel: {
		fontSize: 14,
		fontWeight: "900",
		color: colors.brightGreen
	},
	hostTextContainer: {
		marginLeft: 16,
	},
	starIconBtn: {
		width: 16,
		height: 16,
		margin: 0,
		marginHorizontal: 6,
		position: "relative",
		// top: -2
	},
});

export default OrderConfirmation