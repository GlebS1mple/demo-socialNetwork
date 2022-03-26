import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import mainReducer from "./main-reducer";
import messengerReducer from "./messenger-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
    messenger: messengerReducer,
    main: mainReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;
export default store;