import React, { PropTypes } from 'react'
import TopicListRow from './TopicListRow'
import TopicCreate from './TopicCreate'
import style from './TopicList.css'
import classNames from 'classnames'

var _renderTopicListRow = (list, thumbUp, thumbDown )=> {
    list.sort(function (a, b) {
      return b.vote - a.vote;
    });

    return list.slice(0, 19).map((_topic, index)=>{
        return (<TopicListRow 
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
              <TopicCreate createTopic={createTopic}/>

              <div className={classNames(style['blockDiv'])}>
                <h1 className={classNames(style['testcss'])} >TopicList</h1>
                {_renderTopicListRow(list, thumbUp, thumbDown )}
              </div>
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