import { actionTypes } from "../actions";

const initialState = {
  isOpen: false,
  modalType: null,
  modalProps: {}
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        modalType: action.modalType,
        modalProps: action.modalProps,
        type: action.type
      }
    case actionTypes.CLOSE_MODAL:
      return initialState
    default:
      return state
  }
}

export default modal;
