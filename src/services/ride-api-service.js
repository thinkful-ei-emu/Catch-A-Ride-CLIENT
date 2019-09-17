import config from '../config';
import RideContext from '../context/RideContext';

const RideApiService = {
    getRides() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default RideApiService;