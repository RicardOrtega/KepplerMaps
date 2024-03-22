import {createAction} from "redux-actions";
import {payload_} from "@kepler.gl/reducers";

export const setMapConfig = createAction('SET_MAP_CONFIG',payload => payload);