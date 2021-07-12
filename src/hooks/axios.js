import axios from 'axios'


const instance = axios.create({
  baseURL:'/',
  withCredentials:true
})

instance.interceptors.request.use(
  config=>{

  },
  error=>{

  }
)

instance.interceptors.response.use(
  config=>{

  },
  error=>{
    
  }
)

export default instance