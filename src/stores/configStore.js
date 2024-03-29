import {
  combineReducers, createStore, applyMiddleware, compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  courseReducer, globalReducer, themeReducer, userReducer
} from './reducers'

const rootReducer = combineReducers({
  courseReducer,
  userReducer,
  themeReducer,
  globalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
