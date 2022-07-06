import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import logger from "redux-logger";
import thunk from 'redux-thunk'

export const middlewares = [thunk]
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddlewares(rootReducer)

//const store = createStore(rootReducer, applyMiddleware(logger, thunk))


export default store; 