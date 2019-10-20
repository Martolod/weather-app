let nextTodoId = 0
export const addAction = name => ({
    type: 'ADD',
    id: nextTodoId++,
    name
});


export const filterTypes = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED'
};

export const toggleActive = id => ({
  type: 'TOGGLE_ACTIVE',
  id
});

