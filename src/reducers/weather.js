import { actionTypes } from "../actions";

const initial_state = [
  {
    id: 1,
    name: 'Урюпинск 1',
    temp: '-10',
    active: true
  },
  {
    id: 2,
    name: 'Урюпинск 2',
    temp: '-10',
    active: true
  },
  {
    id: 3,
    name: 'Урюпинск 3',
    temp: '-10',
    active: true
  },
  {
    id: 4,
    name: 'Урюпинск 4',
    temp: '-10',
    active: true
  },
];

const weather = (state = initial_state, action) => { 
  let index;
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          temp: action.temp,
          active: true
        }
      ]
    case actionTypes.TOGGLE:
      return state.map(weather =>
        weather.id === action.id ? { ...weather, active: !weather.active } : weather
      )
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
      ]
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
        ]
    default:
      return state;
  }
}

export default weather;