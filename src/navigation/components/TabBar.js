import colors from '../../common/colors';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { Text } from 'react-native-paper';

function TabBar({ state, descriptors, navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
								? options.title
								: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							// The `merge: true` option makes sure that the params inside the tab screen are preserved
							navigation.navigate({ name: route.name, merge: true });
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={styles.btn}
						>
							<Image
								source={require("../../images/icons/house.png")}
								style={styles.icon}
							/>
							<Text style={styles.text} variant="bodyLarge">
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transaprent",
		paddingHorizontal: 20,
		paddingBottom: Platform.OS === "android" ? 20 : 0
	},
	contentContainer: {
		width: "100%",
		backgroundColor: colors.lighGray,
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 100
	},
	btn: {
		alignItems: "center",
		justifyContent: "center",
		width: 60
	},
	text: {
		color: colors.separatorText,
		fontWeight: "500",
		fontSize: 14,
		lineHeight: 14,
		marginTop: 6
	},
	icon: {
		width: 28,
		resizeMode: "contain"
	}
});

export default TabBar