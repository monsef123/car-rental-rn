import React from 'react'
import { StyleSheet } from 'react-native'
import LoggedNavigation from './logged';
import GuestNavigation from './guest';
import { useSelector } from 'react-redux';


const Navigation = () => {
	// const isLogged = true;
	const isLogged = useSelector(state => state.isLogged);
	// console.log("App state", state);

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