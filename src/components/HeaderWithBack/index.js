import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Text } from 'react-native-paper';

const HeaderWithBack = ({ goBack, title }) => {
	return (
		<View style={styles.container}>
			<IconButton
				icon="chevron-left"
				onPress={goBack}
				size={40}
				style={styles.backBtn}
			/>
			<Text variant="titleLarge" style={styles.title}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		paddingVertical: 10
	},
	title: {
		fontWeight: "900",
		textTransform: "uppercase",
		paddingTop: 10
	},
	backBtn: {
		width: 40,
		height: 40
	}
});

export default HeaderWithBack;