import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import myStore from "./SRC/Redux/Store"
import FullNews from "./SRC/Screens/FullNews"
import CatFeed from "./SRC/Screens/CategoryFeed"

import Feed from "./SRC/Screens/Feed"
import Category from "./SRC/Screens/Category"
import { Provider } from "react-redux"

var feedScreen = () => {
	var FeedStack = createStackNavigator()
	return (
		<FeedStack.Navigator>
			<FeedStack.Screen
				name="StackFeed"
				component={Feed}
				options={{ headerShown: false }}
			/>
			<FeedStack.Screen
				name="FullNews"
				component={FullNews}
				options={{ headerShown: false }}
			/>
		</FeedStack.Navigator>
	)
}
var categoryScreen = () => {
	var CategoryStack = createStackNavigator()
	return (
		<CategoryStack.Navigator>
			<CategoryStack.Screen
				name="StackCategory"
				component={Category}
				options={{ headerShown: false }}
			/>
			<CategoryStack.Screen
				name="CatFeed"
				component={CatFeed}
				options={{ headerShown: false }}
			/>
			<CategoryStack.Screen
				name="FullNews"
				component={FullNews}
				options={{ headerShown: false }}
			/>
		</CategoryStack.Navigator>
	)
}

export default function App() {
	var Tab = createMaterialBottomTabNavigator()
	return (
		<Provider store={myStore}>
			<NavigationContainer>
				<Tab.Navigator
					activeColor="#ec4186"
					inactiveColor="#9b98a6"
					barStyle={{ backgroundColor: "black" }}
				>
					<Tab.Screen
						name="Feed"
						component={feedScreen}
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<Ionicons
										name="md-list"
										color={color}
										size={focused ? 25 : 20}
										style={{ transform: [{ translateY: focused ? -10 : 0 }] }}
									/>
								)
							},
						}}
					/>
					<Tab.Screen
						name="Category"
						component={categoryScreen}
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<FontAwesome
										name="hashtag"
										color={color}
										size={focused ? 25 : 20}
										style={{ transform: [{ translateY: focused ? -10 : 0 }] }}
									/>
								)
							},
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
