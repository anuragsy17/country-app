import configureMockStore from 'redux-mock-store'
import { ThunkMiddleware } from 'redux-thunk';
import reducer from '../src/reducer/reducer';

import rootReducer from '../src/rootReducer/rootReducer';
import { applyMiddleware, createStore,  } from 'redux';
import { middlewares } from '../src/store/store';
import { configureStore } from '@reduxjs/toolkit';


const middleware = [ThunkMiddleware]
export default function(state){
    let testStore = configureStore(middleware)
    return testStore(state)
}
 
//export const testStore = (state ={})=> {return mockStore({...state});};

export const mockStore = (initialState)=>{
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddlewares(rootReducer, initialState)
}