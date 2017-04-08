import { createStore } from 'redux'
import reducer from './reducer'
import comments from './data/comments'

const defaultState = { comments }
const store = createStore(reducer, defaultState)

export default store
