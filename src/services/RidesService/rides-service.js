import config from '../../config'


const RidesApiService={
  getAllRides(){
    return fetch(`${config.API_ENDPOINT}/rides`,{
      headers:{
        Authorization:``
      }
    })
    .then(res=>
      !res.ok? res.json().then(e=>Promise.reject(e)):res.json());
  }
}