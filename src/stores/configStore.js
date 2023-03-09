import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { courseReducer } from './reducers'

const rootReducer = combineReducers({
  courseReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
