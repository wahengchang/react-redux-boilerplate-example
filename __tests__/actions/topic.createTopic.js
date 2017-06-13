import topicActionCreator from '../../src/actions/topic'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { SET_TOPCIS } from '../../src/config/actionType'

const mockStore = configureStore([thunk])

describe('api action creator', () => {
  it('Create new topic', (done) => {
    var initData = {topics: {
                        list: [{
                              id: 1,
                              content: '1- list 1',
                              vote: 99
                          }]
                    }}
    var mockData = {
                        content: '2- list 2'
                    }
    const expectedActions = [{ 
                              type: SET_TOPCIS, 
                              list: [{
                                          id: 1,
                                          content: '1- list 1',
                                          vote: 99
                                      },{
                                          content: '2- list 2',
                                          id : 2,
                                          vote : 0
                                      }]
                            }]


    const store = mockStore(initData)
    store.dispatch(topicActionCreator.createTopic(mockData))
    expect(store.getActions()).toEqual(expectedActions)
    done()
        
  }, 5000)

  it('Create null topic -1', (done) => {
    var initData = {topics: {
                        list: [{
                            id: 1,
                            content: '1- list 1',
                            vote: 99
                        }]
                    }}
    var mockData = {
                        content: '',
                    }

    const store = mockStore(initData)
    store.dispatch(topicActionCreator.createTopic(mockData))
    expect(store.getActions()).toEqual([])
    done()
        
  }, 5000)
  
  it('Create null topic -2', (done) => {
    var initData = {topics: {
                        list: [{
                            id: 1,
                            content: '1- list 1',
                            vote: 99
                        }]
                    }}
    var mockData = {}

    const store = mockStore(initData)
    store.dispatch(topicActionCreator.createTopic(mockData))
    expect(store.getActions()).toEqual([])
    done()
  }, 5000)
})