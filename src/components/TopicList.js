import React, { PropTypes } from 'react'
import TopiclistRow from './TopiclistRow'
import TopicCreate from './TopicCreate'

var _renderTopicListRow = (list, thumbUp, thumbDown )=> {
    return list.map((_topic, index)=>{
        return (<TopiclistRow 
                  key={index} 
                  topic={_topic} 
                  thumbUp={thumbUp} 
                  thumbDown={thumbDown}  />)
    })
}

class TopicList extends React.Component {

  componentDidMount() {}

  render() {
    const { list, thumbUp, thumbDown, createTopic} = this.props

    return (<div>
              <h1> Create </h1>
              <TopicCreate createTopic={createTopic}/>
              <h1 >TopicList</h1>
              {_renderTopicListRow(list, thumbUp, thumbDown )}
            </div>)
  }
}

TopicList.propTypes = {
  list: PropTypes.array.isRequired,
  thumbUp: PropTypes.func.isRequired,
  thumbDown: PropTypes.func.isRequired,
  createTopic:  PropTypes.func.isRequired,
}

export default TopicList