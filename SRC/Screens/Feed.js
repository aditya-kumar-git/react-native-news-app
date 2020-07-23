import React from "react"
import { View, Text, SafeAreaView, StatusBar } from "react-native"
import { connect } from "react-redux"
import { getHeadLines } from "../Redux/Actions"
import { FlatList } from "react-native-gesture-handler"
import SmallNewsBlock from "../Components/SmallNewsBlock"

class Feed extends React.Component {
  state = { refRef: false }
  constructor(props) {
    super(props)
    this.props.getHeadLines()
  }

  renderOrNOT = () => {
    if (this.props.storeHeadlines[0]) {
      return (
        <FlatList
          data={this.props.storeHeadlines}
          keyExtractor={(x, y) => {
            return "TopFeed-" + y
          }}
          renderItem={(x) => {
            return <SmallNewsBlock allDataProp={x.item} indexProp={x.index} />
          }}
        />
      )
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 34,
            }}
          >
            Loading...
          </Text>
        </View>
      )
    }
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
      >
        <StatusBar barStyle="light-content" />
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 34,
            marginVertical: 10,
            letterSpacing: 7,
          }}
        >
          HEADLINES
        </Text>
        <View style={{ flex: 1 }}>{this.renderOrNOT()}</View>
      </SafeAreaView>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getHeadLines: getHeadLines })(Feed)
