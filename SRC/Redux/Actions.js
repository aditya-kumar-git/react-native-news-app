import Axios from "axios"

export var getHeadLines = () => {
  return async (dis) => {
    var output = await Axios({
      baseURL: "https://newsapi.org/v2/top-headlines/",
      params: {
        country: "in",
        apiKey: "",
      },
    })
    try {
      dis({ type: "HEAD_LINES", payload: output.data.articles })
    } catch (error) {
      console.log(error)
    }
  }
}

export var getCat = (cat) => {
  return async (dis) => {
    var output = await Axios({
      baseURL: "https://newsapi.org/v2/top-headlines/",
      params: {
        country: "in",
        apiKey: "",
        category: cat,
      },
    })
    try {
      dis({ type: "CATEGORY", payload: output.data.articles })
    } catch (error) {
      console.log(error)
    }
  }
}

export var getFullNews = (data) => {
  return { type: "FULL", payload: data }
}
