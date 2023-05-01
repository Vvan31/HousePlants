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

export const fetchPlantsRequest = () => {
    return {
        type: 'FETCH_PLANTS_REQUEST'
    }
}

export const fetchPlantsSuccess = (search) => {
  return async (dispatch) => {
      dispatch(fetchPlantsRequest())
      try {
          const APIresult = await fetch('https://perenual.com/api/species-list?key='+ configKeys.Key +'&q='+ search)
          const json = await APIresult.json()
          console.log('API fetch with search of:  ' + search)
          console.log(json)
          dispatch({
              type: 'FETCH_PLANTS_SUCCESS',
              payload: json
          })
      } catch (error) {
          console.log(error)
          dispatch({
              type: 'FETCH_PLANTS_FAILURE',
              payload: error
          })
      }
  }
}

