
import { createStore } from 'redux'
import topicReducer from '../../src/reducers/topic.js'
import {
  SET_TOPCIS
} from '../../src/config/actionType'

let store = createStore(topicReducer, {})

describe('github reducer', () => {
  it('should return the initial state', (done) => {
    const _products = [{a: 'a'}];

    store.dispatch({
        type: 'SET_TOPCIS',
        topic: _products
    });    

    expect(store.getState().topic).toBe(_products)
    done()
  })
})