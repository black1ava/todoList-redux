export const addText = (text) => {
  return {
    type : "ADD_TEXT",
    data : text
  }
}

export const addTask = (task, id) => {
  return {
    type : "ADD_TASK",
    data : task,
    dataId : id,
  }
}

export const deleteTask = (id) => {
  return {
    type : "DELETE_TASK",
    dataId : id
  }
}

export const editTask = (id) => {
  return {
    type : "EDIT_TASK",
    dataId : id
  }
}

export const confirmEdit = (text, id) => {
  return {
    type : "CONFIRM_EDIT",
    data : text,
    dataId : id
  }
}

export const cancelEdit = () => {
  return {
    type : "CANCEL_EDIT"
  }
}