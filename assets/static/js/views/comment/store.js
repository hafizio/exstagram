import { createStore, compose } from 'redux'
import reducer from './reducer'
import comments from './data/comments'

const defaultState = { comments }

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, defaultState, enhancers)

export default store
