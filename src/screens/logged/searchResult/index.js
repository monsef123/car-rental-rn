import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../../common/colors'
import HeaderWithBack from '../../../components/HeaderWithBack'
import strings from '../../../common/strings'
import SimpleInput from '../../../components/SimpleInput'
import CarCard from '../../../components/CarCard'

const SearchResultScreen = ({ navigation }) => {

	const onCarCardPress = () => {
		navigation.navigate("search_confirmation");
	}

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView style={styles.container}>
				<HeaderWithBack
					goBack={navigation.goBack}
					title={strings.result}
				/>
				<View style={styles.row}>
					<View style={{ width: '100%', flexShrink: 1 }}>
						<SimpleInput
							style={{ marginTop: 16 }}
							label={strings.startDate}
							placeholder="13/12/2023"
						/>
					</View>
					<View style={{ width: 16 }} />
					<View style={{ width: '100%', flexShrink: 1 }}>
						<SimpleInput
							style={{ marginTop: 16 }}
							label={strings.endDate}
							placeholder="13/12/2023"
						/>
					</View>
				</View>
				<CarCard
					image={require("../../../images/cars/car1.png")}
					title="Honda Odyssey 2019"
					rating="5.0"
					trips="16"
					price="1.090"
					pricePerDay="300"
					onPress={onCarCardPress}
				/>
				<CarCard
					image={require("../../../images/cars/car2.png")}
					title="Mercedes CLA 22"
					rating="5.0"
					trips="16"
					price="1.090"
					pricePerDay="300"
					onPress={onCarCardPress}
				/>
				<CarCard
					image={require("../../../images/cars/car1.png")}
					title="Honda Odyssey 2019"
					rating="5.0"
					trips="16"
					price="1.090"
					pricePerDay="300"
					onPress={onCarCardPress}
				/>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		width: "100%",
		flexGrow: 1,
		backgroundColor: colors.secondarySurface,
		paddingBottom: 40
	},
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.secondarySurface
	},
	row: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
});

export default SearchResultScreen