import React from 'react'
import { StyleSheet } from 'react-native'
import LoggedNavigation from './logged';
import GuestNavigation from './guest';


const Navigation = () => {
	const isLogged = true;

	if (isLogged) {
		return (
			<LoggedNavigation />
		);
	} else {
		return (
			<GuestNavigation />
		);
	}
}

const styles = StyleSheet.create({

});

export default Navigation