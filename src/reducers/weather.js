import { actionTypes } from "../actions";

/**
 * Weather reducer
 */
const weather = (state = [], action) => {
  let index;
  switch (action.type) {

    // Add new weather data
    case actionTypes.ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          temp: action.temp,
          active: true
        }
      ];

    // Toggle action
    case actionTypes.TOGGLE:
      return state.map(weather =>
        weather.id === action.id ? { ...weather, active: !weather.active } : weather
      );

    // Move row to UP
    case actionTypes.UP:
      index = state.findIndex(el => el.id === action.id);
      if (index === 0){
        return state;
      }
      return [
        ...state.slice(0, index-1),
        state[index],
        state[index-1],
        ...state.slice(index+1, state.length),
      ];

    // Move row to DOWN
    case actionTypes.DOWN:
        index = state.findIndex(el => el.id === action.id);
        if (index === state.length-1){
          return state;
        }
        return [
          ...state.slice(0, index),
          state[index+1],
          state[index],
          ...state.slice(index+2, state.length),
        ];

      // Change weather row
      case actionTypes.CHANGE:
        return state.map(weather =>
            weather.id === action.id ? { ...weather, name: action.name, temp: action.temp } : weather
          )

      // Default
      default:
        return state;
  }
}

export default weather;
