import React from 'react'
import {View, StyleSheet} from 'react-native'


const LineSeparator = () => {

	return (
		<View style={styles.line} />
	)
}

const styles = StyleSheet.create({
	line: {
		width: "100%",
		height: 1,
		backgroundColor: "#E5E5E5",
		marginVertical: 16
	}
});

export default LineSeparator;