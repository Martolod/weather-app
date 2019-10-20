
export const actionTypes = {
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  UP: 'UP',
  DOWN: 'DONW',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  
}

let nextTodoId = 0
export const add = name => ({
    type: actionTypes.ADD,
    id: nextTodoId++,
    name
});


export const toggle = id => ({
  type: actionTypes.TOGGLE,
  id
});

export const openModal = ({modalType, modalProps}) => ({
  type: actionTypes.OPEN_MODAL,
  modalProps: modalProps,
  modalType: modalType,
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
})