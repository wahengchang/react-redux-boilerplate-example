import { combineReducers } from 'redux'
import hello from './hello'
import jsonAPI from './jsonAPI'
import topics from './topic'

const reducer = combineReducers({
  jsonAPI,
  hello,
  topics
})

export default reducer
