import { combineReducers } from "redux"
import tweet from "./tweetReducer"
import user from "./userReducer"

export default combineReducers({
    tweet,
    user,
})