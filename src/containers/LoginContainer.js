import React from "react";
import { StyleSheet } from "react-native";
import GuestScreenWrapper from "../components/GuestScreenWrapper";
import { Text } from "react-native-paper";
import { View, TextInput } from "react-native";
import strings from "../common/strings";
import SelectDropdown from 'react-native-select-dropdown'
import colors from "../common/colors";
import ContainedButton from "../components/ContainedButton";

const countries = ["+212"]

const LoginContainer = () => {

	return (
		<GuestScreenWrapper>
			<Text variant="bodyLarge">{strings.enterPhoneNumber}</Text>
			<View style={styles.inputContainer}>
				<SelectDropdown
					data={countries}
					defaultButtonText="+234"
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						// text represented after item is selected
						// if data array is an array of objects then return selectedItem.property to render after item is selected
						return selectedItem
					}}
					rowTextForSelection={(item, index) => {
						// text represented for each item in dropdown
						// if data array is an array of objects then return item.property to represent item in dropdown
						return item
					}}
					buttonStyle={styles.selectBtn}
					buttonTextStyle={styles.selectBtnText}
				/>
				<TextInput
					style={styles.phoneInput}
					placeholder={strings.phoneInputPlaceholder}
				/>
			</View>
			<ContainedButton
				style={{ marginTop: 24 }}
				iconName="arrow-right"
			>
				Login
			</ContainedButton>
		</GuestScreenWrapper>
	)
}

const styles = StyleSheet.create({
	selectBtn: {
		width: 100,
		borderRadius: 4,
		backgroundColor: colors.inputGray,
		padding: 14
	},
	selectBtnText: {
		color: colors.textOnInput
	},
	inputContainer: {
		width: "100%",
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	phoneInput: {
		width: "100%",
		backgroundColor: colors.inputGray,
		padding: 14,
		fontSize: 18,
		flexShrink: 1,
		marginLeft: 8,
		borderRadius: 4,
	}
})

export default LoginContainer;