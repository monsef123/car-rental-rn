import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderWithBack = ({ goBack, title }) => {
	return (
		<Pressable style={styles.container} onPress={goBack}>
			<Icon name="chevron-left" size={40} style={styles.icon} />
			<Text variant="titleLarge" style={styles.title}>{title}</Text>
		</Pressable>
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
		paddingTop: 5,
	},
	icon: {
		position: "relative",
		left: -10
	}
});

export default HeaderWithBack;