import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { courseReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
  courseReducer,
  userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
