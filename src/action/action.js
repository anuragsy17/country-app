import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
   } from './types'; 

export const fetchUserRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = users =>{ 
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUser = (region)=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get(`https://restcountries.com/v2/region/${region}`)
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        }).catch( error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}
// export const fetchRegion = ()=>{
//     console.log('hi',);
//     return (dispatch)=>{
//         dispatch(fetchUserRequest)
//         axios.get('mock.json')
//         .then(response => {
//             console.log('region_response', response);
//             const region = response.data
//             dispatch(fetchRegionSuccess(region))
//         }).catch( error => {
//             const errorMsg = error.message
//             dispatch(fetchRegionFailure(errorMsg))
//         })
//     }
// }

