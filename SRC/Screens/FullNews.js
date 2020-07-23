import React from "react"
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native"
import { connect } from "react-redux"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { AntDesign } from "@expo/vector-icons"

class FullNews extends React.Component {
  render() {
    var { showFull } = this.props
    return (
      <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
        <StatusBar hidden />

        <ImageBackground
          source={{ uri: showFull.urlToImage }}
          style={{
            height: Dimensions.get("screen").height * 0.4,
            width: "100%",
          }}
        >
          <SafeAreaView>
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
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "200",
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            {showFull.source.name}
          </Text>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-end",
              fontWeight: "200",
              fontSize: 15,
              marginRight: 20,
            }}
          >
            {showFull.publishedAt.slice(0, 10)}
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            width: "90%",
            marginLeft: "2%",
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          {showFull.title}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            width: "94%",
            marginLeft: "2%",
            marginVertical: 10,
            marginLeft: 15,
            fontWeight: "200",
          }}
        >
          {showFull.description}
        </Text>
        <View
          style={{
            backgroundColor: "#ec4186",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            height: 70,
            width: 70,
            borderRadius: 200,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Read More</Text>
        </View>
      </ScrollView>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(FullNews)
