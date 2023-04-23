
import * as data from '@/data/data.json';

// import a store 
const { createStore } = Redux

// initial state
const initialState = {
  plants: [],
  users: []
}
// reducer function
const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        ...state,
        plants: [...state.plants, action.payload]
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state
  }
}

// initialize store
const store = createStore(reducer, data)

// subscribe to store
store.subscribe(() => {
  console.log('Store updated! ', store.getState())
})

// Dispatch an action
store.dispatch({
  type: 'ADD_PLANT',
  payload: {
    id: 1,
    name: 'Aloe Vera',
  }
})