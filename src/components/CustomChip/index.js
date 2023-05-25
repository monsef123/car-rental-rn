import React from 'react'
import { StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper';
import MCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../../common/colors';

const CustomChip = ({ isPressable, isSelected, onPress, iconName, label, style }) => {

	{/** Func: calls the onPress prop function if the chip is pressable */}
	const onChipPress = () => {
		if(isPressable) {
			onPress();
		}
	}

	return (
		<Chip
			icon={
				() => <MCommunityIcon
					name={iconName}
					color={isPressable && isSelected ? colors.white : colors.textBlack}
					size={22}
				/>
			}
			onPress={onChipPress}
			style={[styles.chip(isPressable && isSelected), style]}
			textStyle={styles.chipText(isPressable && isSelected)}
		>
			{label}
		</Chip>
	)
}

const styles = StyleSheet.create({
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

export default CustomChip