import { API_DATA } from './../constants/constants.js'
import { combineReducers } from 'redux'

const globalReducer = (state={searchData: []}, action) => {
    console.log('action.type: ',action)
    switch(action.type) {

        case "API_DATA":
            console.log('API_DATA reducer')
            return Object.assign({}, state, {searchData: action.payload})

        default:
            console.log('default reducer')    
            return state
    }
}

const combReducer = combineReducers({
    globalReducer
})

export default combReducer
