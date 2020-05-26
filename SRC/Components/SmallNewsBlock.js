import React from "react"
import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	ImageBackground,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { getFullNews } from "../Redux/Actions"
import { connect } from "react-redux"

class SmallNewsBlock extends React.Component {
	componentDidMount() {}

	renderWhat = () => {
		var { allDataProp } = this.props
		if (this.props.indexProp === 0) {
			return (
				<TouchableOpacity
					onPress={() => {
						this.props.navigationProp.navigate("FullNews")
						this.props.getFullNews(allDataProp)
					}}
					style={{
						width: "95%",

						height: Dimensions.get("screen").height * 0.4,
						alignItems: "center",
						marginBottom: 20,
						alignSelf: "center",
					}}
				>
					<ImageBackground
						source={{ uri: allDataProp.urlToImage }}
						style={{ height: "100%", width: "100%" }}
						imageStyle={{ borderRadius: 30 }}
					>
						<View
							style={{
								backgroundColor: "rgba(0,0,0,0.5)",
								flex: 1,
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							<Text
								style={{
									color: "white",
									fontWeight: "bold",
									fontSize: 20,
									textAlign: "center",
									width: "95%",
									marginVertical: 10,
								}}
							>
								{allDataProp.title}
							</Text>
						</View>
					</ImageBackground>
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity
					onPress={() => {
						this.props.navigationProp.navigate("FullNews")
						this.props.getFullNews(allDataProp)
					}}
					style={{
						width: "100%",
						alignItems: "center",
						flexDirection: "row",
						marginVertical: 10,
					}}
				>
					<Image
						source={{ uri: allDataProp.urlToImage }}
						style={{ height: 100, width: 100, borderRadius: 20 }}
					/>

					<View style={{ marginTop: 5, marginLeft: 10, width: "100%" }}>
						<Text
							style={{
								color: "white",
								width: "65%",
								fontWeight: "bold",
								fontSize: 12,
							}}
						>
							{allDataProp.title}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<Text
								style={{
									color: "white",

									fontWeight: "200",
									fontSize: 12,
								}}
							>
								{allDataProp.publishedAt.slice(0, 10)}
							</Text>
							<Text
								style={{
									color: "white",
									fontWeight: "200",
									marginHorizontal: 10,
									fontSize: 12,
								}}
							>
								|
							</Text>
							<Text
								style={{
									color: "white",

									fontWeight: "200",
									fontSize: 12,
								}}
							>
								{allDataProp.source.name}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			)
		}
	}

	render() {
		return <>{this.renderWhat()}</>
	}
}

var SmallNewsBlockFUN = (props) => {
	var NavNav = useNavigation()
	return <SmallNewsBlock {...props} navigationProp={NavNav} />
}

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, { getFullNews: getFullNews })(
	SmallNewsBlockFUN
)
