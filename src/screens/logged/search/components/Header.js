import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Text } from 'react-native-paper';
import strings from '../../../../common/strings';
import colors from '../../../../common/colors';

const SearchScreenHeader = ({ goBack }) => {
	return (
		<View style={styles.container}>
			<Text variant="titleLarge" style={styles.title}>{strings.search}</Text>
			<IconButton
				icon="close"
				onPress={goBack}
				iconColor={colors.textBlack}
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
		paddingVertical: 20
	},
	title: {
		fontWeight: "900",
		textTransform: "uppercase"
	},
});

export default SearchScreenHeader