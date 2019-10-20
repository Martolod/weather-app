export const actionsTypes = {
  ADD: 'ADD'
}

let nextTodoId = 0
const addAction = name =>({
    type: actionsTypes.ADD,
    id: nextTodoId++,
    name
});

export default addAction;