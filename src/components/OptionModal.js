import React from 'react'
import Modal from 'react-modal'


function OptionModal(props){
    return (
        <Modal
         isOpen={!!props.selectedOption}
         onRequestClose={props.handleCloseModal}
         contentLabel={"Selected option"}
         closeTimeoutMS={200}
         >
         <h3>Selected Option</h3>
         {props.selectedOption && <p>{props.selectedOption}</p>}
         <button onClick={props.handleCloseModal}>Okay</button>
        </Modal>
    )
    
}

export default OptionModal