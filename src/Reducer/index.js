const initialState = {
  tasks : []
}
const addTaskReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TASK" : 
      return {
        ...state,
        tasks : [
          ...state.tasks,
          {
            task: action.data,
            id: state.tasks.length
          }
        ]
      }
    default :
      return state
  }
}

export default addTaskReducer