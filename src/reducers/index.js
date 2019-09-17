import { combineReducers } from 'redux';
import rideReducer from './rideReducer';

export default combineReducers({
    rides: rideReducer
});