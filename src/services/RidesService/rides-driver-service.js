import config from '../../config'


const RidesApiService={
  getAllRides(){
    return fetch(`${config.API_ENDPOINT}/rides/driver`,{
      headers:{
        Authorization:``
      }
    })
    .then(res=>
      !res.ok? res.json().then(e=>Promise.reject(e)):res.json());
  },

  postNewRide(obj){
    return fetch(`${config.API_ENDPOINT}/rides/driver`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
        Authorization:``,
        
      },
      body:obj
    })
    .then(res=>
      !res.ok?res.json().then(e=>Promise.reject(e)):res.json())
  },
  deleteRide(){
    return fetch(`${config.API_ENDPOINT}/rides/driver`,{
      method:'DELETE',
      headers:{Authorization:``}
    })
    
  }
}

export default RidesApiService;