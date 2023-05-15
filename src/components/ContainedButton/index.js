import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const ContainedButton = ({ iconName, children, onPress, style, disabled }) => {

	return (
		<Button
			icon={iconName}
			disabled={disabled}
			mode="contained"
			onPress={onPress}
			style={[styles.btn, style]}
			contentStyle={styles.content}
			labelStyle={styles.label}
		>
			{children}
		</Button>
	)
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 8,
		borderRadius: 50
	},
	label: {
		fontSize: 16,
		fontWeight: "400"
	},
	content: {
		flexDirection: 'row-reverse'
	}
});

export default ContainedButton