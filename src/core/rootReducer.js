import { combineReducers } from "redux";
import news from "../components/organism/News/News.reducer";

const rootReducer = combineReducers({
  news: news,
});

export default rootReducer;
