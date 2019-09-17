import { FETCH_RIDES, NEW_RIDE } from './types';
import config from '../config';

//`https://jsonplaceholder.typicode.com/posts`
//`${config.API_ENDPOINT}/rides`
export const fetchRides = () => dispatch => {
    console.log('Fetching...')
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(rides =>
            dispatch({
                type: FETCH_RIDES,
                payload: rides
            })
        );
}