import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from './../Action'

function AddTasks(props){
  
  const [task, setTask] = useState("")
  
  function handleChange(event){
    setTask(event.target.value)
  }
  
  function handleSubmit(event){
    event.preventDefault()
    if(task !== ""){
      props.addTask(task)
    }
    setTask("")
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='What do you need to accomplish today?'
          value={task}
          onChange={handleChange}
          style={{
            width: '250px'
          }}
        />
        <button>
          Add
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addTask
}

export default connect(null, mapDispatchToProps)(AddTasks)