import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../../../common/colors';
import { Chip } from 'react-native-paper';
import strings from '../../../../common/strings';
import { ORDER_METHODS } from '../../../../common/constants';
import MCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchScreenMethodSelector = ({ method, onMethodPress }) => {

	return (
		<View style={[styles.container, { justifyContent: "flex-start" }]}>
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
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
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

export default SearchScreenMethodSelector