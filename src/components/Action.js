import React from 'react'

function Action(props){
    return(
      <div className="action">
        <button
         className="big-button"
         onClick={props.handlePick} 
         disabled={!props.hasOptions}>What should i do?
        </button>
      </div>
    )
  }

export default Action