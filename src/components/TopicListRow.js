import React, { PropTypes } from 'react'

class TopicListRow extends React.Component {
  render() {
    const { topic, thumbUp, thumbDown } = this.props

    const _thumbUp = () => {
      thumbUp(topic.id)
    }
    const _thumbDown = () => {
      thumbDown(topic.id)
    }

    return (<div>
              <div><span> {topic.content}</span> </div>
              <div><p> {topic.vote}</p> </div>
              <div>
                  <button onClick={_thumbUp}> Like </button>
              </div>
              <div> 
                  <button onClick={_thumbDown}> Dislike</button>
              </div>
          </div>)
  }
}

TopicListRow.propTypes = {
  topic: PropTypes.object.isRequired,
  thumbUp: PropTypes.func.isRequired,
  thumbDown: PropTypes.func.isRequired,
}

export default TopicListRow