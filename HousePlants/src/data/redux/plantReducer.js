
import * as data from '@/data/data.json';

const initialState = {
    userPlants: [],
    searchPlants: data.data,
    error: ''
}

export const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLANT':
            return {
                ...state,
                userPlants: [...state.userPlants, action.payload],
                error: ''
            }
        case 'REMOVE_PLANT':
            return {
                ...state,
                userPlants: state.userPlants.filter(plant => plant.id !== action.payload),
                error: ''
            }
        case 'ADD_PLANT_IMAGE':
            return {
                ...state,
                userPlants: state.userPlants.map(plant => {
                    if (plant.id === action.payload.id) {
                        return {
                            ...plant,
                            image: action.payload
                        }
                    } else {
                        return plant
                    }
                }),
                error: ''
            }
        default:
            return state
        }
}

export const searchReducer = (state = initialState, action) => {
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
        default:
            return state
        }
}
