import config from '../../config';
import TokenService from '../token-service';


const RidesApiService = {
  getAllRides() {
    return fetch(`${config.API_ENDPOINT}/rides/passenger`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },

  postNewRide(obj) {
    return fetch(`${config.API_ENDPOINT}/rides/driver`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,

      },
      body: obj
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  passengerCancelRide(ride_id) {
    return fetch(`${config.API_ENDPOINT}/rides/passenger`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ ride_id })
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
  passengerJoinRide(ride_id) {
    return fetch(`${config.API_ENDPOINT}/rides/passenger`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ ride_id })
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
};

export default RidesApiService;