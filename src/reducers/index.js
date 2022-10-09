import {combineReducers} from "redux";
import {categoryReducer, mediumReducer} from "./categoryReducer";
import basketReducer from "./CartSlice"

const rootReducer = combineReducers({
    category : categoryReducer,
    medium : mediumReducer,
    cart : basketReducer,
})

export default rootReducer;