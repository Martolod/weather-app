/** Type for actions */
export const actionTypes = {
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  UP: 'UP',
  DOWN: 'DONW',
  CHANGE: 'CHANGE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

/** Modal window types */
export const modalTypes = {
  confirm: 'confirm',
  change: 'change'
}

/** Add new city */
export const add = data => ({
  type: actionTypes.ADD,
  id: data.id,
  name: data.name,
  temp: data.main.temp
});

/** Move up */
export const up = id => ({
  type: actionTypes.UP,
  id
});

/** Move down */
export const down = id => ({
  type: actionTypes.DOWN,
  id
});

/** Togle active/delete */
export const toggle = id => ({
  type: actionTypes.TOGGLE,
  id
});

/** Change city data */
export const change = ({id, name, temp}) => ({
  type: actionTypes.CHANGE,
  id: id,
  name: name,
  temp: temp
});

/** Open modal window */
export const openModal = ({modalType, modalProps}) => ({
  type: actionTypes.OPEN_MODAL,
  modalProps: modalProps,
  modalType: modalType,
});

/** Close modal window */
export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
})
