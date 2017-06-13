import { SET_TOPCIS } from '../config/actionType'

const topicActionCreator = {
  createTopic : (_topic) => {
    return (dispatch, getState) => {

      let topicList = getState()

      const _createTopic = content => {return{
        content,
        id : topicList.length +1,
        vote : 0
      }}

      return (!_topic || !_topic.content ) ? 
              null : 
              dispatch({
                type: SET_TOPCIS,
                topic: topicList.concat(_createTopic(_topic.content))
              })
    }
  },
  thumbUp : (_id) => {
    return (dispatch, getState) => {
      let topicList = getState()
      topicList.forEach( topic => (topic.id === _id) ? topic.vote +=1 : null)
      return dispatch({
                type: SET_TOPCIS,
                topic: topicList
              })
    }
  },
  thumbDown : (_id) => {
    return (dispatch, getState) => {
      let topicList = getState()
      topicList.forEach( topic => (topic.id === _id) ? topic.vote -=1 : null)
      return dispatch({
                type: SET_TOPCIS,
                topic: topicList
              })
    }
  }
}
export default topicActionCreator