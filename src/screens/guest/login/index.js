import React, { useState } from "react";
// import { Text } from "react-native-paper";
import LoginContainer from "../../../containers/LoginContainer";


const LoginScreen = () => {
	const [phone, setPhone] = useState("");

	return (
		<LoginContainer
			phone={phone}
			setPhone={setPhone}
		/>
	)
}

export default LoginScreen;