import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'

const CategoryItem = ({ label, onPress }) => {
	return (
		<Button mode='outlined' onPress={onPress} style={{ marginRight: 12 }}>
			{label}
		</Button>
	)
}

const HomeCategories = () => {

	return (
		<View>
			<ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
				<CategoryItem
					label="Family cars"
				/>
				<CategoryItem
					label="Luxury cars"
				/>
				<CategoryItem
					label="SUV"
				/>
				<CategoryItem
					label="Electric"
				/>
				<CategoryItem
					label="Luxury cars"
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		marginVertical: 16,
		height: "auto"
	}
});

export default HomeCategories