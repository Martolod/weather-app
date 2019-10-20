import { actionsTypes } from "../actions";

const weather = (state = [], action) => { 
  switch (action.type) {
    case actionsTypes.ADD:
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          active: true
        }
      ]
    default:
      return state;
  }
}

export default weather;