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
					<CarCard />
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