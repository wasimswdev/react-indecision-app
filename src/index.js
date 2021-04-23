import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class Indecision extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.state = {
      options : props.options,
      selectedOption : undefined
    }
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if(options){
        this.setState(() => ({ options }))
    }
    }catch(e){
      //do nothing
    }
  }

  
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
    
  }
  componentWillUnmount(){

  }

  handleCloseModal(){
    this.setState(() => ({
      selectedOption : false
    }))
  }
  handleDeleteOptions(){
    this.setState(() => ({ options : [] }))   
  }

  handleDeleteOption(optiontoDelete){
    this.setState((prevState) => ({ 
      options : prevState.options.filter(option => option !== optiontoDelete)
    }))
    }
  

  handlePick(){
    const randomNum = Math.floor(Math.random()*this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption : option
    }))
  }

  handleAddOption(newTask){

    if(!newTask){
      return 'Enter valid value of the task'
    }else if(this.state.options.indexOf(newTask) > -1){
      return 'This option already exist'
    }
    this.setState((prevState) =>({ options : prevState.options.concat([newTask]) }))
  }

  render(){
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
  
    return(
      <div>
      <Header title={title} subtitle={subtitle}/>
      <div className="container">
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <div className="widget">
          <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions} 
          handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption}/>
          </div>  
      </div>
      <OptionModal selectedOption={this.state.selectedOption}  handleCloseModal={this.handleCloseModal} />
      </div>
    )
  }
}

Indecision.defaultProps = {
  options : []
}

ReactDOM.render(<Indecision  />, document.getElementById('root'))