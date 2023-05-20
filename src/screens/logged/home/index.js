import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBtn from './components/SearchBtn'
import colors from '../../../common/colors'
import HomeCategories from './components/Categories'
import CarCard from '../../../components/CarCard'

const HomeScreen = () => {

	return (
		<ScrollView contentContainerStyle={styles.scrollView}>
			<SafeAreaView style={styles.container}>
				<SearchBtn />
				<HomeCategories />
				<View style={styles.carsContainer}>
					<CarCard
						image={require("../../../images/cars/car1.png")}
						title="Honda Odyssey 2019"
						rating="5.0"
						trips="16"
						price="1.090"
						pricePerDay="300"
					/>
					<CarCard
						image={require("../../../images/cars/car2.png")}
						title="Mercedes CLA 22"
						rating="5.0"
						trips="16"
						price="1.090"
						pricePerDay="300"
					/>
					<CarCard
						image={require("../../../images/cars/car1.png")}
						title="Honda Odyssey 2019"
						rating="5.0"
						trips="16"
						price="1.090"
						pricePerDay="300"
					/>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		flexGrow: 1
	},
	container: {
		width: "100%",
		flex: 1,
		paddingHorizontal: 18,
		backgroundColor: colors.secondarySurface
	},
	carsContainer: {
		width: "100%"
	}
});

export default HomeScreen