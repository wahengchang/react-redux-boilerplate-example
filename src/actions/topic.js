import { SET_TOPCIS } from '../config/actionType'

const topicActionCreator = {
  createTopic : (_topic) => {
    return (dispatch, getState) => {
      let topicList = getState().topics.list
      const _createTopic = content => {return{
        content,
        id : topicList.length +1,
        vote : 0
      }}

      return (!_topic || !_topic.content ) ? 
              null : 
              dispatch({
                type: SET_TOPCIS,
                list: topicList.concat(_createTopic(_topic.content))
              })
    }
  },
  thumbUp : (_id) => {
    return (dispatch, getState) => {
      const addVote = (_topic) => {
        _topic.vote += 1;
        return _topic;
      }
      let topicList = getState().topics.list
      let _topicList = topicList.map( topic => (topic.id === _id) ?  addVote(topic) : topic)
      return dispatch({
                type: SET_TOPCIS,
                list: _topicList
              })
    }
  },
  thumbDown : (_id) => {
    return (dispatch, getState) => {
      const addVote = (_topic) => {
        _topic.vote -= 1;
        return _topic;
      }
      let topicList = getState().topics.list
      let _topicList = topicList.map( topic => (topic.id === _id) ?  addVote(topic) : topic)
      return dispatch({
                type: SET_TOPCIS,
                list: _topicList
              })
    }
  }
}
export default topicActionCreator