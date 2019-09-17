import config from '../config';
import RideContext from '../context/RideContext';

const RideApiService = {
    getRides(destination, starting) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )

        //BackendFiltering
        // const body = {
        //     starting: starting,
        //     destination: destination
        // }
        // return fetch(``, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // })
        //     .then(res => res.json());
    },
}

export default RideApiService;