import React from 'react'
import ReactDOM from 'react-dom'

//Class based components

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        }
    }
    handleAdd(){
      this.setState((prevState) => {
          return {
            count: prevState.count + 1
          }  
    })
  }
  
    handleSubtract(){
        this.setState((prevState) => {
          return {
            count : prevState.count - 1
          }
        })
    }

    handleReset(){
        this.setState(() => {
          return {
            count : 0
          }
        })
    }
    
    render(){
        
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleSubtract}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
  count : 0
}

ReactDOM.render(<Counter />, document.getElementById('root'))
