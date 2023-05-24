import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { Text } from 'react-native-paper';
import strings from '../../../common/strings';
import { ORDER_METHODS } from '../../../common/constants';
import SearchScreenHeader from './components/Header';
import SearchScreenMethodSelector from './components/MethodSelector';

const SearchScreen = ({ navigation }) => {
	const [method, setMethod] = useState(ORDER_METHODS.DELIVERY);

	const onMethodPress = (value) => {
		if (value !== method) {
			setMethod(value);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			{/** Header */}
			<SearchScreenHeader
				goBack={navigation.goBack}
			/>
			{/** Question text */}
			<Text variant="bodyLarge" style={styles.question}>
				{strings.recoveryMethod}
			</Text>
			{/** Method selector */}
			<SearchScreenMethodSelector
				method={method}
				onMethodPress={onMethodPress}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.white
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
	},
	question: {
		fontWeight: "500",
		lineHeight: 18,
		marginBottom: 10,
	},
});

export default SearchScreen