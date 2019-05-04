export default (state = { restaurants: [] }, action) => {
  switch(action.type) {
    case 'LOAD_RESTAURANTS':
      return { 
        ...state,
        restaurants: action.restaurants
      }
    default:
      return state
  }
}
