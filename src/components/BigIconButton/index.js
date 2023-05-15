import React from 'react'
import { StyleSheet } from 'react-native'
import { IconButton } from "react-native-paper"
import colors from '../../common/colors'

const BigIconButton = ({ iconName, style, onPress }) => {

	return (
		<IconButton
			icon={iconName}
			iconColor={colors.primary}
			style={[styles.container, style]}
			size={24}
			onPress={onPress}
			containerColor={colors.bigIconBtn}
			mode='contained'
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 64,
		height: 64,
		borderRadius: 64
	}
});

export default BigIconButton