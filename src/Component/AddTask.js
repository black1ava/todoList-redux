import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addText, addTask, confirmEdit, cancelEdit } from './../Action'

const AddTask = (props) => {
  
  const handleChange = e => {
    props.addText(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    if(props.text.length){
      props.addTask(props.text, uuidv4())
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Add your task..."
          value={props.text}
          onChange={handleChange}
        />
        {!props.edit && <button>
          Add
        </button>}
      </form>
        {props.edit && <div>
        <button 
          className="Confirm"
          onClick={() => props.confirmEdit(props.text, props.editId)}
        >
          Confirm
        </button>
        <button 
          className="Cancel"
          onClick={props.cancelEdit} 
        >
          Cancel
        </button>
      </div>}
    </div>
  )
}

const mapStateToProps = state => ({
  text : state.text,
  editId : state.editId,
  edit : state.edit
})

const mapDispatchToProps = {
  addText,
  addTask,
  confirmEdit,
  cancelEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)