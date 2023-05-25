import React from 'react'
import { View, StyleSheet } from 'react-native'
import strings from '../../../../common/strings';
import { ORDER_METHODS } from '../../../../common/constants';
import CustomChip from '../../../../components/CustomChip';

const SearchScreenMethodSelector = ({ method, onMethodPress }) => {

	return (
		<View style={[styles.container, { justifyContent: "flex-start" }]}>
			<CustomChip
				iconName="walk"
				label={strings.pickup}
				isPressable
				isSelected={method === ORDER_METHODS.PICK_UP}
				onPress={() => onMethodPress(ORDER_METHODS.PICK_UP)}
			/>
			<CustomChip
				iconName="near-me"
				label={strings.delivery}
				isPressable
				isSelected={method === ORDER_METHODS.DELIVERY}
				onPress={() => onMethodPress(ORDER_METHODS.DELIVERY)}
				style={{ marginLeft: 16 }}
			/>
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
});

export default SearchScreenMethodSelector