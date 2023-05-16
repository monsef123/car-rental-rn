import React, { useState } from "react";
import LoginContainer from "../../../containers/LoginContainer";


const LoginScreen = ({ navigation }) => {
	const [phone, setPhone] = useState("");

	return (
		<LoginContainer
			phone={phone}
			setPhone={setPhone}
			navigation={navigation}
		/>
	)
}

export default LoginScreen;