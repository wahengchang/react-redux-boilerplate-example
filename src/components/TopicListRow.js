import React, { PropTypes } from 'react'
import style from './TopicListRow.css'
import classNames from 'classnames'

class TopicListRow extends React.Component {
  render() {
    const { topic, thumbUp, thumbDown } = this.props

    const _thumbUp = () => {
      thumbUp(topic.id)
    }
    const _thumbDown = () => {
      thumbDown(topic.id)
    }

    return (<div className={classNames(style['formRow'])}>
              <div className={classNames(style['rowName'])}><span> {topic.content}</span> </div>
              <div className={classNames(style['rowVote'])}><span> {topic.vote}</span> </div>
              <div className={classNames(style['rowThumbUp'])}>
                  <button onClick={_thumbUp}> Like </button>
              </div>
              <div className={classNames(style['rowThumbDown'])}> 
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