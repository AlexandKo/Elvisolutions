import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./reducer/user_reducer";


const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
}) || compose;

const indexReducers = combineReducers({
    user: userReducer,
})

const store = createStore(indexReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;