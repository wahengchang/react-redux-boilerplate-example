import { connect } from 'react-redux'
import TopicList from '../components/TopicList'

const mapStateToProps = (state, ownProps) => {
  const { topic } = state
  return topic
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    thumbUp: (id) => {
        console.log(' ----- thumbUp', id)
    },
    thumbDown: (id) => {
        console.log(' ----- thumbDown', id)
    },
    createTopic: (content) => {
      console.log(' -------- createTopic', content)
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