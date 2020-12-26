const initialState = {
  text : "",
  tasks : [],
  edit : false,
  editId : null
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    
    case "ADD_TEXT" :
      return {
        ...state,
        text : action.data
      } 
      
    case "ADD_TASK" :
      return {
        ...state,
        tasks : [
          ...state.tasks,
          {
            id : action.dataId,
            data : action.data,
          }
        ],
        text : ""
      }
      
    case "DELETE_TASK" :
      return {
        ...state,
        tasks : state.tasks.filter(task => task.id !== action.dataId)
      }
      
    case "EDIT_TASK" :
      
      let task
      
      for(let element of state.tasks){
        if(element.id === action.dataId){
          task = element.data
        }
      }
      
      return {
        ...state,
        text : task,
        edit : true,
        editId : action.dataId
      }
      
      case "CONFIRM_EDIT" :
        return{
          ...state,
          tasks : state.tasks.map(task => {
            if(task.id === action.dataId){
              task.data = action.data
            }
            return task
          }),
          edit : false,
          text : "",
          editId : null
        }
        
      case "CANCEL_EDIT" :
        return {
          ...state,
          edit : false,
          editId : null,
          text : ""
        }
      
    default :
      return state
  }
}

export default reducer