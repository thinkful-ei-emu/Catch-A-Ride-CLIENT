import config from '../../config';
import TokenService from '../token-service';

const CommentApiService = {
    getComments(ride_id) {
        return fetch(`${config.API_ENDPOINT}/rides/${ride_id}/comments`, {
            method: 'GET',
            headers: {
                Authorization: `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },
    postNewComment(obj) {
        return fetch(`${config.API_ENDPOINT}/rides/:ride_id/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                Authorization: `bearer ${TokenService.getAuthToken()}`

            },
            body: obj
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },
}

export default CommentApiService;