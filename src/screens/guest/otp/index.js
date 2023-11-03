import React, { useState } from "react";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import GuestScreenWrapper from "../../../components/GuestScreenWrapper";
import { Text } from "react-native-paper";
import { View, TextInput } from "react-native";
import strings from "../../../common/strings";
import colors from "../../../common/colors";
import ContainedButton from "../../../components/ContainedButton";
import BigIconButton from "../../../components/BigIconButton";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../redux/account/types";

const LoginOtp = ({ navigation }) => {
	const [otp, setOtp] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = () => {
		dispatch({ type: LOGIN });
	}

	return (
		<GuestScreenWrapper>
			<StatusBar barStyle="light-content" />
			<Text variant="bodyLarge" style={{fontSize: 16, fontWeight: "400"}}>{strings.enterOtpSentTo("0632396557")}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					value={otp}
					onChangeText={setOtp}
					maxLength={16}
					style={styles.phoneInput}
					placeholder={strings.phoneInputPlaceholder}
					keyboardType="phone-pad"
					returnKeyType="done"
				/>
			</View>
			<ContainedButton
				style={{ marginTop: 24 }}
				iconName="arrow-right"
				onPress={handleSubmit}
				disabled={!otp}
			>
				{strings.confirm}
			</ContainedButton>
			<View style={styles.resendContainer}>
				<TouchableOpacity>
					<Text variant="bodyLarge" style={styles.otpText}>{strings.otpNotReceived}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.stickyBottom}>
				<Text style={styles.termsText} variant="bodyMedium">
					{strings.termsText}
				</Text>
				<BigIconButton
					iconName="arrow-left"
					onPress={navigation.goBack}
				/>
			</View>
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
		// marginLeft: 8,
		borderRadius: 4,
	},
	termsText: {
		marginTop: 16,
		lineHeight: 18
	},
	resendContainer: {
		width: "100%",
		height: 100,
		alignItems: "center",
		justifyContent: "center"
	},
	otpText: {
		textDecorationLine: "underline"
	},
	stickyBottom: {
		width: '100%',
		position: "absolute",
		bottom: 0,
	},
	termsText: {
		height: 100
	}
})

export default LoginOtp;