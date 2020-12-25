import React from 'react'
import { connect } from 'react-redux'

function ShowTask(props){
  const arr = props.tasks
  const taskList = arr.map(task => <li key={task.id}>
    {task.task}
  </li>)
  
  return(
    <div>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(ShowTask)