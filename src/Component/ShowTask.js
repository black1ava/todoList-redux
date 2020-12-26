import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, editTask } from './../Action'

const ShowTask = (props) => {
  const taskList = props.tasks.map(task =>
    <li key={task.id}>
      <p>
        {task.data}
      <button 
        className="Delete"
        onClick={() => props.deleteTask(task.id)} 
      >
        Delete
      </button>
      <button 
        className="Edit"
        onClick={() => props.editTask(task.id)} 
      >
        Edit
      </button>
    </p>
  </li>)
  console.log(props.tasks)
  return(
    <div>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  tasks : state.tasks
})

const mapDispatchToProps = {
  deleteTask,
  editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTask)