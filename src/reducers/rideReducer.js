import { FETCH_RIDES, NEW_RIDE } from '../actions/types';


const initialState = {
    rides: [],
    ride: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RIDES:
            console.log('Reducer')
            return {
                ...state,
                rides: action.payload
            };
        default:
            return state;
    }
}