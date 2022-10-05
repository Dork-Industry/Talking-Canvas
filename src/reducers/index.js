import {combineReducers} from "redux";
import {categoryReducer, mediumReducer} from "./categoryReducer";
const rootReducer = combineReducers({
    category : categoryReducer,
    medium : mediumReducer,
})

export default rootReducer;