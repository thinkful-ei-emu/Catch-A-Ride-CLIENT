import config from '../../config';
import TokenService from '../token-service';


const RidesApiService={
  getAllRides(){
    return fetch(`${config.API_ENDPOINT}/rides/driver`,{
      headers:{
        Authorization:`bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res=>
        !res.ok? res.json().then(e=>Promise.reject(e)):res.json());
  },
  postNewRide(obj){
    return fetch(`${config.API_ENDPOINT}/rides/driver`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        Authorization:`bearer ${TokenService.getAuthToken()}`,
        
      },
      body:obj
    })
      .then(res=>
        !res.ok?res.json().then(e=>Promise.reject(e)):res.json());
  },

  
  deleteRide(){
    return fetch(`bearer ${config.API_ENDPOINT}/rides/driver`,{
      method:'DELETE',
      headers:{Authorization:`${TokenService.getAuthToken()}`}
    });
    
  }
};

export default RidesApiService;