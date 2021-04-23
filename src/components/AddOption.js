import React from 'react'

class AddOption extends React.Component{
    constructor(props){
      super(props)
      this.handleAdd = this.handleAdd.bind(this)
      this.state = {
        error: undefined
      }
    }
  
    handleAdd(e){
      e.preventDefault()
      const newTask = e.target.elements.addoption.value.trim()
      const error = this.props.handleAddOption(newTask)
      
      this.setState(() => ( {error} ))
  
      if(!error){
        e.target.elements.addoption.value = ''
      }
    }
  
    render(){
      return(
        <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAdd}>
            <input className="add-option__input" type='text' name='addoption' placeholder='Add Task' />
            <button className="button">Add Option</button>
          </form>
        </div>
      )
    }
  }

  
export default AddOption