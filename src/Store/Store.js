import {createStore,combineReducers,applyMiddleware} from "redux";
import reducers from "../Reducers/Reducers"
import {taskMiddleware} from "react-palm/tasks";
import store from "@kepler.gl/components"


export default store = createStore(reducers,{},applyMiddleware(taskMiddleware))