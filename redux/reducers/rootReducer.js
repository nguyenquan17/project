import { combineReducers } from 'redux'
import vaccinesReducer from './vaccinesReducer'
import loaderReducer from "./loaderReducer";
import vaccinationSiteReducer from './vaccinationSiteReducer'

const rootReducer = combineReducers({
    loaderReducer,
    vaccinesReducer,
    vaccinationSiteReducer
})

export default rootReducer