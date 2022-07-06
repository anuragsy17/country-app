import { 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS,
    FETCH_REGION_SUCCESS,
    FETCH_REGION_FAILURE
} from "../action/types"  

export const initialState = {
    loading: false,
    users: [],
    error: '',
    
}
const reducer = (state = initialState, action ) =>{
    switch (action.type){
        case FETCH_USERS_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: 
        return {
            loading: false,
            users: action.payload,
            error: ''
        }
        // case FETCH_REGION_SUCCESS: 
        // return {
        //     loading: false,
        //     region: action.payload,
        //     error: '',
        // }
        case FETCH_USERS_FAILURE: 
        return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state;
    }
}
//console.log('error in state =>', this.initialState.reducer.error);

export default reducer;