import { connect } from 'react-redux'
import TopicList from '../components/TopicList'
import topicActionCreator from '../actions/topic'

const mapStateToProps = (state, ownProps) => {
  const { topics } = state
  return topics
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thumbUp: (id) => {
        console.log(' ----- thumbUp', id)
        dispatch(topicActionCreator.thumbUp(id))
    },
    thumbDown: (id) => {
        console.log(' ----- thumbDown', id)
        dispatch(topicActionCreator.thumbDown(id))
    },
    createTopic: (content) => {
      console.log(' -------- createTopic', content)
      dispatch(topicActionCreator.createTopic({content}))
    }
  }
}

const topicListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)

// initState is a function which is run before server, and keep consistency as a thunk middleware, and return a promise 
topicListContainer.initState = (store,req,res) => {
    return (dispatch, getState) => {
      return new Promise( (resolve, reject)=> {
        resolve ()
      })
    }
}

export default topicListContainer