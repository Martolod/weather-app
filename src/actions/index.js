
export const actionTypes = {
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  UP: 'UP',
  DOWN: 'DONW',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

export const add = data => ({
  type: actionTypes.ADD,
  id: data.id,
  name: data.name,
  temp: data.main.temp
});

export const up = id => ({
  type: actionTypes.UP,
  id
});

export const down = id => ({
  type: actionTypes.DOWN,
  id
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