import React from 'react'
import { StyleSheet } from 'react-native'
import HeaderWithBack from '../../../components/HeaderWithBack';


const OrderConfirmation = ({ navigation }) => {

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView style={styles.container}>
				<HeaderWithBack
					goBack={navigation.goBack}
					title="Confirmation"
				/>
			</SafeAreaView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({

});

export default OrderConfirmation