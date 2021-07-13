import axios from 'axios'
const instance = axios.create({
  baseURL:'/api',
  withCredentials:true
})

instance.interceptors.request.use(
  config=>{
    return config
  },
  error=>{

  }
)

instance.interceptors.response.use(
  res=>{
    const {data} = res
    if(data.code === '100'){
      return data.info
    }else if(data.code === '20011'){
      window.location.href = '/login'
      return Promise.reject()
    }
    else{
      window.$message.error(data.msg)
      return Promise.reject(data)
    }
  },
  error=>{
    
  }
)

export default instance