import React, { PropTypes } from 'react'
import style from './TopicCreate.css'
import classNames from 'classnames'

class TopicCreate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 'Initial data...'
      }
      this.updateStateData = this.updateStateData.bind(this);
   };

   updateStateData(val) {
      this.setState({data: val})
   }

  render() {
    const { createTopic } = this.props
    let { data } = this.state
    
    const onChange = (e) => {
        console.log('e.target.value: ', e.target.value);
        this.updateStateData( e.target.value)
    }

    const _createTopic = () => {
        createTopic(data)
        this.updateStateData('')
    }

    return (<div  className={classNames(style['blockDiv'])}>
            <h1> Create </h1>
            <label  className={classNames(style['forLabel'])}>
                Content
            </label>
            <input 
                required
                onChange={onChange}  
                value={data}  
                type="text"
                placeholder="your  content"/> 
            <button  className={classNames(style['createButton'])} onClick={_createTopic}> Add</button>
        </div>)
  }
}

TopicCreate.propTypes = {
  createTopic: PropTypes.func.isRequired,
}

export default TopicCreate