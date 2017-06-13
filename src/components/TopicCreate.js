import React, { PropTypes } from 'react'

class TopicListRow extends React.Component {
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

    return (<div>
            <label>
                content
            </label>
            <input 
                required
                onChange={onChange}  
                value={data}  
                type="text"
                placeholder="your  content"/> 
            <button onClick={_createTopic}> Add</button>
            <span>
                {this.state.data}
            </span>
        </div>)
  }
}

TopicListRow.propTypes = {
  createTopic: PropTypes.func.isRequired,
}

export default TopicListRow