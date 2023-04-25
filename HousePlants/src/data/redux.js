
import * as data from '@/data/data.json';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import {configKeys} from '@/config/index.js';

// import a store 
/* const { createStore } = Redux */

// initial state

const initialState = {
  plants: [],
  searchPlants: data.data,
  users: [],
  error: ''
}
// reducer function
const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'FETCH_PLANTS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PLANTS_SUCCESS':
      return {
        ...state,
        loading: false,
        searchPlants: action.payload,
        error: ''
      }
    case 'FETCH_PLANTS_FAILURE':
      return {
        ...state,
        loading: false,
        searchPlants: [],
        error: action.payload
      }
    case 'ADD_PLANT':
      return {
        ...state,
        plants: [...state.plants, action.payload],
        error: ''
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        error: ''
      }
    default:
      return state
  }
}

// initialize store
export const store = createStore(reducer, applyMiddleware(thunk))

// subscribe to store
store.subscribe(() => {
  console.log('Store updated! ', store.getState())
})

// Dispatch an action
export const addPlant = (plant) => {
  return {
    type: 'ADD_PLANT',
    payload: plant
  }
}

// Dispatch an action
const fetchPlantsRequest = () => {
  return {
    type: 'FETCH_PLANTS_REQUEST'
  }
}
export const searchPlant = (search) => async() => {
  try{
    dispatch(fetchPlantsRequest())
    const APIresult = await fetch('https://perenual.com/api/species-list?key='+ configKeys.Key +'&q='+ search)
    APIresult.json().then(json => {
      console.log(json)
      dispatch({ 
        type: 'FETCH_PLANTS_SUCCESS',
        payload: json
      })
    })
  } catch (error) {
    console.log(error)
    return {
      type: 'FETCH_PLANTS_FAILURE',
      payload: error
    }
  }
}

// Dispatch an action
/* store.dispatch({
  type: 'ADD_PLANT',
  payload: {
    id: 1,
    name: 'Aloe Vera',
  }
}) */
