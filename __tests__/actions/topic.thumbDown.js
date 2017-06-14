import topicActionCreator from '../../src/actions/topic'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { SET_TOPCIS } from '../../src/config/actionType'

const mockStore = configureStore([thunk])

describe('api action creator', () => {
  it('thumbDown', (done) => {
    var _id = 2
    var _vote = 4

    var initData = {topics: {
                        list: [{
                            id: 1,
                            content: '1- list 1',
                            vote: 99
                        },{
                            id: _id,
                            content: '2- list 2',
                            vote: _vote
                        }]
                    }}

    const store = mockStore(initData)
    store.dispatch(topicActionCreator.thumbDown(_id))

    const targetEle = store.getActions()[0].list.filter( ele => ele.id===_id)[0]
    expect(targetEle.vote ).toEqual(_vote-1)
    done()
        
  }, 5000)
})