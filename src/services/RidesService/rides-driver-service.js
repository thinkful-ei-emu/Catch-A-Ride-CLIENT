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
    const body = {
      starting,
      destination
    };
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
        res.json()
      )
      .then(res => console.log(res));
  }
};

export default RidesApiService;