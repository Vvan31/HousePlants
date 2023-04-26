import {configKeys} from '@/config/index.js';

export const addPlant = (plant) => {
    return {
        type: 'ADD_PLANT',
        payload: plant
    }
}

export const removePlant = (plantId) => {
    return {
        type: 'REMOVE_PLANT',
        payload: plantId
    }
}

/* export const addPlantImage = (plant) => {
    return {
        type: 'ADD_PLANT_IMAGE',
        payload: plant
    }
} */

export const fetchPlantsRequest = () => {
    return {
        type: 'FETCH_PLANTS_REQUEST'
    }
}

export const fetchPlantsSuccess = (search) => async() => {
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
    


