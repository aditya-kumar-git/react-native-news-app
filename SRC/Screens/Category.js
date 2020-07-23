import React from "react"
import { View, Text, SafeAreaView } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"

class Category extends React.Component {
  state = {
    catList: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}
      >
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 34,
            marginVertical: 10,
            letterSpacing: 7,
            alignSelf: "flex-start",
          }}
        >
          CATEGORY
        </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            contentContainerStyle={{
              justifyContent: "space-evenly",
              flex: 1,
            }}
            data={this.state.catList}
            keyExtractor={(x, y) => {
              return "DAT-" + y
            }}
            scrollEnabled={false}
            renderItem={(x) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("CatFeed", {
                      nameProp: x.item,
                    })
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 26,
                      textAlign: "center",
                      fontWeight: "300",
                      textTransform: "capitalize",
                    }}
                  >
                    {x.item}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default Category
