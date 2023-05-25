import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, IconButton, Text } from 'react-native-paper';
import colors from '../../../../common/colors';

const HostDetails = () => {

	return (
		<>
			<Text>Hosted by</Text>
			<View style={styles.row}>
				<Avatar.Text size={48} label="aac" labelStyle={styles.avatarLabel} />
				<View style={styles.hostTextContainer}>
					<Text variant="bodyLarge" style={{ fontWeight: "600", color: colors.textBlack }}>Casa car rentals</Text>
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
					<Text variant="bodyLarge" style={{ fontWeight: "100", fontSize: 12 }}>Typically responds within 1 minute</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	row: {
		// paddingHorizontal: 18,
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
	},
});

export default HostDetails