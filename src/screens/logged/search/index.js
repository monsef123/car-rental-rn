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
import BigIconButton from '../../../components/BigIconButton';

const SearchScreen = ({ navigation }) => {
	const [method, setMethod] = useState(ORDER_METHODS.DELIVERY);
	const [carTypes, setCarTypes] = useState([]);

	/** Func: Handles order method press */
	const onMethodPress = (value) => {
		if (value !== method) {
			setMethod(value);
		}
	}

	/** Func: Handles car type checkbox press */
	const onCarTypeCheckboxPress = (value) => {
		let newCarTypes = [...carTypes];
		if (carTypes.includes(value)) {
			newCarTypes = newCarTypes.filter(item => item !== value);
		} else {
			newCarTypes.push(value);
		}
		setCarTypes(newCarTypes);
	}

	return (
		<>
			<ScrollView
				contentContainerStyle={styles.scrollView}
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
						carTypes={carTypes}
						onCheckboxPress={onCarTypeCheckboxPress}
					/>
				</SafeAreaView>
			</ScrollView>
			{/** Validate button */}
			<BigIconButton
				iconName="arrow-right"
				style={styles.nextBtn}
				iconColor={colors.white}
				containerColor={colors.textBlack}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.white,
		paddingBottom: 40
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
	nextBtn: {
		position: "absolute",
		bottom: 60,
		right: 20
	}
});

export default SearchScreen