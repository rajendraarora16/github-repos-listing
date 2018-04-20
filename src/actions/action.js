import { API_DATA } from './../constants/constants.js'
import api from './../apiData/api'

export function getApiData(data) {
    return {
        type: "API_DATA",
        payload: data
    }
}

export function searchFetch(q) {
    return function(dispatch) {
        
        return api.getData(q).then(data => {
            dispatch(getApiData(data));
        }).catch((err) => console.log(err));
    }
} 

