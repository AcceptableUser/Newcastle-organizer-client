import {applyMiddleware, createStore} from 'redux'
import reducers from './reducers'
import ReduxThunk  from 'redux-thunk'

const middlewareEnhancer = applyMiddleware(ReduxThunk)

export const store = createStore(reducers, middlewareEnhancer)
