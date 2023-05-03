import axios from 'axios';

import { batch } from 'react-redux';

import { fetchPlantsSuccess } from './actions.js';
import { configKeys } from '@/config/index.js';

const URL = 'https://perenual.com/api/species-list?key='+ configKeys.Key +'&q=';

export const fetchPlants = (search) => {
    return async (dispatch) => {
        try {
            const APIresult = await axios.get(URL + search)
            const json = await APIresult.data
            batch(() => {
                dispatch(fetchPlantsSuccess(json))
            })
        } catch (error) {
            console.log(error)
        }
    }
}