import { FETCH_RIDES, NEW_RIDE } from './types';
import config from '../config';
import Rides from '../components/Rides/Rides';

export const fetchRides = () => dispatch => {
    fetch(`${config.API_ENDPOINT}/rides`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_RIDES,
            payload: Rides
        }));
}