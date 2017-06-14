import React, { PropTypes } from 'react'
import style from './TopicCreate.css'
import classNames from 'classnames'

class TopicCreate extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 'Initial data...',
         isTooLong: false
      }
      this.updateStateData = this.updateStateData.bind(this);
   };

   updateStateData(val) {
      this.setState({data: val})
   }

  render() {
    const { createTopic } = this.props
    let { data, isTooLong } = this.state
    
    const onChange = (e) => {
        // console.log('e.target.value: ', e.target.value);
        console.log('e.target.value.length: ', e.target.value.length);

        if(e.target.value.length >= 255) {
            this.setState({isTooLong: true})
        } else {
            this.setState({isTooLong: false})
            this.updateStateData( e.target.value)
        }
    }

    const _createTopic = () => {
        if(!isTooLong) {
            createTopic(data)
            this.updateStateData('')
        }
    }

    return (<div  className={classNames(style['blockDiv'])}>
            <h1> Create </h1>
            <label  className={classNames(style['forLabel'])}>
                Content
            </label>
            <input 
                className={ (!isTooLong)? '' : classNames(style['errorField'])} 
                required
                onChange={onChange}  
                value={data}  
                type="text"
                placeholder="your  content"/> 
            <button  disabled={isTooLong} className={classNames(style['createButton'])} onClick={_createTopic}> Add</button>

            { (!isTooLong)? '' : <span className={classNames(style['errorMessage'])}> Should shorter than 255 characters </span>}
        </div>)
  }
}

TopicCreate.propTypes = {
  createTopic: PropTypes.func.isRequired,
}

export default TopicCreate