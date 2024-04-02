
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer, {enhanceReduxMiddleware} from '@kepler.gl/reducers';
import appReducer from './app-reducer';



const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState:{
    activeSidePanel:null,
    currentModal:null
  }
});

const reducers = combineReducers({
  keplerGL:customizedKeplerGlReducer,
  app: appReducer
})

const midlewares = enhanceReduxMiddleware([]);
const enhancers= [applyMiddleware(...midlewares)];



export default createStore(reducers,{},compose(...enhancers));
