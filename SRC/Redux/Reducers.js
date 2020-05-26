import { combineReducers } from "redux"

var storeHeadlines = (iniState = [], action) => {
	switch (action.type) {
		case "HEAD_LINES": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var storeCategory = (iniState = [], action) => {
	switch (action.type) {
		case "CATEGORY": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var showFull = (iniState = [], action) => {
	switch (action.type) {
		case "FULL": {
			return action.payload
		}
		default: {
			return iniState
		}
	}
}

var allReducers = combineReducers({
	storeHeadlines: storeHeadlines,
	showFull: showFull,
	storeCategory: storeCategory,
})

export default allReducers
