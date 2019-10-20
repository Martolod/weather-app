const initial_state = [{
  id: -1,
  name: 'Урюпинск',
  active: true
}];

const weather = (state = initial_state, action) => { 
  switch (action.type) {
    case 'ADD':
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          active: true
        }
      ]
    case 'TOGGLE_ACTIVE':
      return state.map(weather =>
        weather.id === action.id ? { ...weather, active: !weather.active } : weather
      )
    default:
      return state;
  }
}

export default weather;