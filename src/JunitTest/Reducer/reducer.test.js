import { shallow } from 'enzyme'
import reducer, { initialState } from './../../reducer/reducer.js'
//import action from './../../reducer/action.js'
//import { initialState } from './../../reducer/reducer.js'
import {
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './../../action/types.js'


describe('reducer test', () => {
    it('reducer default state', () => {
        const newState = reducer(undefined, {})
        expect(newState).toEqual(initialState )
    })

    it('FETCH_USERS_REQUEST test', ()=>{
        const state = {...initialState, loading: true}
        const newState = reducer(undefined, {
            type: FETCH_USERS_REQUEST,
            payload: initialState 
        })
        expect(newState).toEqual(state)
    })

    
    it('FETCH_USERS_SUCCESS test', ()=>{
        // const action = {
        //     type: FETCH_USERS_SUCCESS,
        //     users: action.payload
        // }
        const action = FETCH_USERS_SUCCESS
        const state = {...initialState, users: action.payload, }// check for payload value, loading false
        const newState = reducer( undefined,{
            type: FETCH_USERS_SUCCESS,
            users: action.payload 
        })
        expect(newState).toEqual(state)
    })
    
    it('FETCH_USERS_FAILURE test', ()=>{
        const action = FETCH_USERS_FAILURE
        const state = {...initialState, error: action.payload}
        const newState = reducer(undefined, {
            type: FETCH_USERS_FAILURE,
            error: action.payload 
        })
        expect(newState).toEqual(state)
    })
})