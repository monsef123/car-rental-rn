import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBtn from './components/SearchBtn'
import colors from '../../../common/colors'
import HomeCategories from './components/Categories'

const HomeScreen = () => {

	return (
		<ScrollView contentContainerStyle={styles.scrollView}>
			<SafeAreaView style={styles.container}>
				<SearchBtn />
				<HomeCategories />
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
	}
});

export default HomeScreen