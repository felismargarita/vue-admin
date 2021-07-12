
import {ref} from 'vue'
import axios from './axios'
export default (config)=>{
  const loading = ref(false)
  const status = ref(false)
  const data = ref(null)
  const fetch = async (conf)=>{
    try {
      data.value = await axios(conf || config)
      status.value = true
    }catch(e){
      status.value = false
      console.log(e)
    }
  }
  return {
    loading,
    status,
    fetch
  }
}