import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import colors from '../../../../common/colors';
import { Text } from 'react-native-paper';
import strings from '../../../../common/strings';

const SearchBtn = ({ onPress }) => {

	return (
		<TouchableRipple style={{ marginTop: 20 }} onPress={onPress}>
			<View style={styles.container}>
				<Text variant="bodyLarge" style={styles.text}>{strings.search}</Text>
			</View>
		</TouchableRipple>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		width: "100%",
		height: 48,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: colors.inputGray,
		justifyContent: "center",
		paddingHorizontal: 16
	},
	text: {
		color: colors.textBlack,
		fontWeight: "500"
	}
});

export default SearchBtn