
import { createStore, combineReducers } from 'redux'
import topic from '../../src/reducers/topic.js'
import {
  SET_TOPCIS
} from '../../src/config/actionType'

let store = createStore(combineReducers({topic}), {})

describe('github reducer', () => {
  it('should return the initial state', (done) => {
    const _json = [{a: 'a'}];

    store.dispatch({
        type: 'SET_TOPCIS',
        list: _json
    });    

    expect(store.getState().topic.list).toBe(_json)
    done()
  })
})