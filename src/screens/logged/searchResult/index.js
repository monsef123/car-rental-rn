import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../../common/colors'
import HeaderWithBack from '../../../components/HeaderWithBack'
import strings from '../../../common/strings'
import SimpleInput from '../../../components/SimpleInput'

const SearchResultScreen = ({ navigation }) => {

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			bounces={false}
			showsVerticalScrollIndicator={false}
		>
			<SafeAreaView style={styles.container}>
				<HeaderWithBack
					goBack={navigation.goback}
					title={strings.result}
				/>
				<View style={styles.row}>
					<View style={{ width: '100%', flexShrink: 1 }}>
						<SimpleInput
							style={{ marginTop: 16 }}
							label="Date de début"
							placeholder="13/12/2023"
						/>
					</View>
					<View style={{ width: 16 }} />
					<View style={{ width: '100%', flexShrink: 1 }}>
						<SimpleInput
							style={{ marginTop: 16 }}
							label="Date de fin"
							placeholder="13/12/2023"
						/>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
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
		justifyContent: "space-between"
	}
});

export default SearchResultScreen