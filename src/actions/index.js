/** main actions types */
export const actionsTypes = {
  ADD: 'ADD'
}

/** visibility filter types for weather list */
export const filterTypes = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED'
}

let nextTodoId = 0
/** 
 * Add new weather data 
 * @param name - city name
 */
export const addWeatherData = name =>({
    type: actionsTypes.ADD,
    id: nextTodoId++,
    name
});

export default addWeatherData;