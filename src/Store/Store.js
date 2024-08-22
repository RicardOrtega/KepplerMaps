import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import keplerGlReducer, {enhanceReduxMiddleware, KeplerGlState} from "@kepler.gl/reducers";
import appReducer from "../Reducers/Reducers";
import {createAction, handleActions} from "redux-actions";

export const ADD_LAYER = 'ADD_LAYER'
export const addlayer = createAction(ADD_LAYER)


const customizedKeplerGLReducer = keplerGlReducer.initialState({
    uiState: {
        activeSidePanel: null,
        currentModal: null
    },
});

const initialState: KeplerGlState = {
    loaded: false,
    visState: {
        layers: []
    }
}


const layerReducer = handleActions({
    [ADD_LAYER]: (state: KeplerGlState, action) => ({
        ...state, visState: {
            ...state.visState, layers: [...state.visState.layers, action.payload]
        }
    })
}, initialState)

const reducers = combineReducers({
    keplerGl: customizedKeplerGLReducer,
    app: appReducer
});


const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers, {}, compose(...enhancers));
