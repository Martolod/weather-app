const initialState = {
  modalType: null,
  modalProps: {}
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}

export default modal;