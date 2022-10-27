import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initailState  = {}
const middleware    = {thunk}

const store  = createStore(
    rootReducer,
    initailState,
    compose(applyMiddleware(...middleware))
);
export default store;