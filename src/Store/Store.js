import {createStore,combineReducers,applyMiddleware} from "redux";
import reducers from "../Reducers/Reducers"
import {taskMiddleware} from "react-palm/tasks";


export default store = createStore(reducers,{},applyMiddleware(taskMiddleware))