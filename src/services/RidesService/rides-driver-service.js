import config from '../../config';
import TokenService from '../token-service';


const RidesApiService = {
  getDriverRides() {
    return fetch(`${config.API_ENDPOINT}/rides/driver`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  
  getAllRides(starting, destination) {
    let body;
    if(starting.length === 0 && destination.length > 1) {
      body = { destination };
    } else if(starting.length > 1 && destination.length === 0) {
      body = { starting }; 
    } else {
      body = {
        starting,
        destination
      };
    }
  
    return fetch(`${config.API_ENDPOINT}/rides`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(body)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  
  postNewRide(obj) {
    return fetch(`${config.API_ENDPOINT}/rides/driver`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`

      },
      body: obj
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },


  deleteRide(ride_id) {
    return fetch(`${config.API_ENDPOINT}/rides/driver`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ ride_id })
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
      
  }
};

export default RidesApiService;