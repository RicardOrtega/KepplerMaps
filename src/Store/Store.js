import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import keplerGlReducer,{enhanceReduxMiddleware} from "@kepler.gl/reducers";
import appReducer from "../Reducers/Reducers";

const customizedKeplerGLReducer = keplerGlReducer.initialState({
    uiState:{
        activeSidePanel:null,
        currentModal: null
    }
});

const reducers = combineReducers({
    keplerGl:customizedKeplerGLReducer,
    app:appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers,{},compose(...enhancers));