import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../common/colors';
import { Text } from 'react-native-paper';
import strings from '../../../common/strings';
import { ORDER_METHODS } from '../../../common/constants';
import SearchScreenHeader from './components/Header';
import SearchScreenMethodSelector from './components/MethodSelector';
import LineSeparator from '../../../components/LineSeparator';
import SimpleInput from '../../../components/SimpleInput';
import OptionSlider from './components/OptionsSlider';
import CarTypeSelector from './components/CarTypeSelector';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const SearchScreen = ({ navigation }) => {
	const tabBarHeight = useBottomTabBarHeight();
	const [method, setMethod] = useState(ORDER_METHODS.DELIVERY);

	const onMethodPress = (value) => {
		if (value !== method) {
			setMethod(value);
		}
	}

	return (
		<ScrollView
			contentContainerStyle={[styles.scrollView, {paddingBottom: tabBarHeight}]}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
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
				{/** Separator */}
				<LineSeparator />
				{/** Basic form */}
				<SimpleInput
					placeholder="Trademark"
				/>
				<SimpleInput
					style={{ marginTop: 16 }}
					label="Date de début"
					placeholder="13/12/2023"
				/>
				<SimpleInput
					style={{ marginTop: 16 }}
					label="Date de fin"
					placeholder="13/12/2023"
				/>
				<SimpleInput
					style={{ marginTop: 16 }}
					label="Lieu de prise en charge et de retour"
					placeholder="Gauthier, NO92 Casablanca"
				/>
				{/** Car options slider */}
				<OptionSlider 
					label="Niveau mécanique"
				/>
				{/** Car type selector */}
				<CarTypeSelector 
					label="Quel type de voiture souhaitez-vous ?"
				/>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.white
	},
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