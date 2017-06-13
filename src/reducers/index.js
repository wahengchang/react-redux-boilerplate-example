import { combineReducers } from 'redux'
import hello from './hello'
import jsonAPI from './jsonAPI'
import topic from './topic'

const reducer = combineReducers({
  jsonAPI,
  hello,
  topic
})

export default reducer
