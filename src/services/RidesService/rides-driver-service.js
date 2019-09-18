import config from '../../config';


const RidesApiService = {
  getAllRides(starting, destination) {
    const body = {
      starting,
      destination
    }
    return fetch(`${config.API_ENDPOINT}/rides`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteRide() {
    return fetch(`${config.API_ENDPOINT}/rides/driver`, {
      method: 'DELETE',
      headers: { Authorization: '' }
    });

  }
};

export default RidesApiService;