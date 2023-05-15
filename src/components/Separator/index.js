import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../common/colors';
import strings from '../../common/strings';


const Separator = () => {

	return (
		<View style={styles.container}>
			<View style={styles.line} />
			<Text style={styles.text}>{strings.or}</Text>
			<View style={styles.line} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 20
	},
	text: {
		color: colors.separatorText,
		marginHorizontal: 10
	},
	line: {
		width: "100%",
		height: 1,
		flexShrink: 1,
		backgroundColor: colors.stroke
	}
});

export default Separator