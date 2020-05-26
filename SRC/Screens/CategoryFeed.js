import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { connect } from "react-redux"
import { getCat } from "../Redux/Actions"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import SmallNewsBlockFUN from "../Components/SmallNewsBlock"
import { AntDesign } from "@expo/vector-icons"

class CatFeed extends React.Component {
	componentDidMount() {
		this.props.getCat(this.props.route.params.nameProp)
	}

	renderOrNot = () => {
		if (this.props.storeCategory[0]) {
			return (
				<View style={{ flex: 1 }}>
					<FlatList
						data={this.props.storeCategory}
						keyExtractor={(x, y) => {
							return "CATFEED-" + y
						}}
						renderItem={(x) => {
							return (
								<SmallNewsBlockFUN allDataProp={x.item} indexProp={x.index} />
							)
						}}
					/>
				</View>
			)
		} else {
			return (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
						Loading...
					</Text>
				</View>
			)
		}
	}

	render() {
		return (
			<SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
				<TouchableOpacity
					onPress={() => {
						this.props.navigation.goBack()
					}}
				>
					<AntDesign
						name="leftcircle"
						style={{
							marginLeft: 10,
							color: "white",
							marginVertical: 5,
							fontSize: 30,
						}}
					/>
				</TouchableOpacity>
				<Text
					style={{
						color: "white",
						marginLeft: 10,
						fontWeight: "bold",
						fontSize: 34,
						marginVertical: 10,
						letterSpacing: 7,
						alignSelf: "flex-start",
						textTransform: "uppercase",
					}}
				>
					{this.props.route.params.nameProp}
				</Text>
				{this.renderOrNot()}
			</SafeAreaView>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, { getCat: getCat })(CatFeed)
