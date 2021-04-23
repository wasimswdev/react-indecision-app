import React from 'react'
import ReactDOM from 'react-dom'


//JSX version
let  show = false

const onButtnClick = (e) => {

  show = !show 
  renderApp()
}

const renderApp =() => {
  const template = (
    <div>
      <h1> Visibility toggle</h1>
      <button onClick={onButtnClick}>{show ? 'Hide details' : 'Show details'}</button>
      {show && <p>This is the paragraph which you can now see!</p>}
    </div>
  )

  ReactDOM.render(template, document.getElementById('root'))

}

renderApp()


//Class based component with state
class VisibilityToggle extends React.Component{
  constructor(props){
    super(props)
    this.handleShow = this.handleShow.bind(this)
    this.state = {
      show : false
    }
  }

  handleShow(){
    this.setState((prevState) =>{
      return {
        show : !prevState.show
      }
    })
  }
  render(){
    return(
      <div>
      <h1>Visibility toggle</h1>
      <button onClick={this.handleShow}>{this.state.show ? 'Hide details' : 'Show details'}</button>
      {this.state.show && <p>This is the paragraph you can now see!</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('root'))