import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from './reducers'

const rootReducer = combineReducers({
  categoryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
