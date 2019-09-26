import config from '../../config';
import TokenService from '../token-service';

const RidesVoteService={
  postUpVote(driverId,rideId){ 
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`

      },
      body: JSON.stringify({driverId,rideId})
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());},
  postDownVote(driverId,rideId){ 
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
    
      },
      body: JSON.stringify({driverId,rideId})
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());}
};



export default RidesVoteService;