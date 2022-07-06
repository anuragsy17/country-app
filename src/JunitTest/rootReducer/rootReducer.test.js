import { createStore } from "redux";
import reducer from "../../reducer/reducer";
import rootReducer from "../../rootReducer/rootReducer";
import {FETCH_USERS_REQUEST} from '../../action/types'

describe('rootReducer test', () => {
    it('rootReducer', () => {
        let store = createStore(rootReducer)
        expect(store.getState().reducer).toEqual(reducer(undefined, {}))
        let action = { type: FETCH_USERS_REQUEST }
        store.dispatch(action)
        expect(store.getState().reducer).toEqual(reducer(undefined, action))
    })
}) 