import {
  SET_TOPCIS
} from '../config/actionType'

const INIT_STATE = [
                    {
                        id: 1,
                        content: '1- list 1',
                        vote: 99
                    },
                    {
                        id: 2,
                        content: 'list 2',
                        vote: 1
                    },
                    {
                        id: 3,
                        content: 'list 3',
                        vote: 1
                    },
                    {
                        id: 4,
                        content: '4 llllist 2',
                        vote: 2
                    }
                ];

const topicReducer = (state = {list: INIT_STATE}, action) => {
  switch (action.type) {
    case SET_TOPCIS:{
      return Object.assign({}, state, { list: action.list })
    }
    default:
      return state
  }
}

export default topicReducer
