import {
  SET_TOPCIS
} from '../config/actionType'

const INIT_STATE = [
                    {
                        id: 1,
                        content: 'Peter is the best',
                        vote: 5
                    },
                    {
                        id: 2,
                        content: 'Charlotte is good',
                        vote: 2
                    },
                    {
                        id: 3,
                        content: 'Others is ok',
                        vote: 1
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
