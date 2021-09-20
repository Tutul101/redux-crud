export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

export const removeTodo = (id, data) => {
  return {
    type: "REMOVE_TODO",
  };
};

export const editTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id: id,
  };
};
