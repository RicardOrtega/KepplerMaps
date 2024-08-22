import {createAction, handleAction, handleActions} from "redux-actions";
import KeplerGlSchema from "@kepler.gl/schemas";

//Const
export const INIT = 'INIT';
export const SET_MAP_CONFIG = 'SET_MAP_CONFIG';
export const ADD_LAYER = "ADD_LAYER"

//ACTIONS
export const appInit = createAction(INIT);
export const setMapConfig = createAction(SET_MAP_CONFIG);


//init state

const initialState = {
    appName: 'example',
    loaded: false,
    visState: {
        layers: []
    }
};

//reducer

const appReducer = handleActions({
        [INIT]: (state, action) => ({
            ...state,
            loaded: true
        }),
        [SET_MAP_CONFIG]: (state, action) => ({
            ...state,
            mapConfig: KeplerGlSchema.getConfigToSave(action.payload)
        })
    },
    initialState
);

export default appReducer;
