import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { IconButton, Text, Chip } from 'react-native-paper';
import strings from '../../../common/strings';
import { ORDER_METHODS } from '../../../common/constants';
import MCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchScreen = ({ navigation }) => {
	const [method, setMethod] = useState(ORDER_METHODS.DELIVERY);

	const onMethodPress = (value) => {
		if (value !== method) {
			setMethod(value);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<Text variant="titleLarge" style={styles.title}>{strings.search}</Text>
				<IconButton
					icon="close"
					onPress={navigation.goBack}
				/>
			</View>
			<Text variant="bodyLarge" style={styles.question}>
				{strings.recoveryMethod}
			</Text>
			<View style={[styles.row, { justifyContent: "flex-start" }]}>
				<Chip
					icon={
						() => <MCommunityIcon
							name="walk"
							color={method === ORDER_METHODS.PICK_UP ? colors.white : colors.textBlack}
							size={22}
						/>
					}
					onPress={() => onMethodPress(ORDER_METHODS.PICK_UP)}
					style={styles.chip(method === ORDER_METHODS.PICK_UP)}
					textStyle={styles.chipText(method === ORDER_METHODS.PICK_UP)}
				>
					{strings.pickup}
				</Chip>
				<Chip
					icon={
						() => <MCommunityIcon
							name="near-me"
							color={method === ORDER_METHODS.DELIVERY ? colors.white : colors.textBlack}
							size={22}
						/>
					}
					onPress={() => onMethodPress(ORDER_METHODS.DELIVERY)}
					style={[styles.chip(method === ORDER_METHODS.DELIVERY), { marginLeft: 16 }]}
					textStyle={styles.chipText(method === ORDER_METHODS.DELIVERY)}
				>
					{strings.delivery}
				</Chip>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.white
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
	},
	title: {
		fontWeight: "900",
		textTransform: "uppercase"
	},
	question: {
		fontWeight: "500",
		lineHeight: 18,
		marginBottom: 10,
	},
	chip: (selected) => ({
		borderRadius: 50,
		height: 46,
		paddingHorizontal: 20,
		backgroundColor: selected ? colors.textBlack : colors.lighGray
	}),
	chipText: (selected) => ({
		color: selected ? colors.white : colors.textBlack
	}),
});

export default SearchScreen