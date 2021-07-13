
import {ref} from 'vue'
import axios from './axios'
export default (config)=>{
  const loading = ref(false)
  const status = ref(false)
  const data = ref(null)
  const fetch = async (conf)=>{
    try {
      loading.value = true
      data.value = await axios(conf || config)
      loading.value = false
      status.value = true
      return data.value
    }catch(e){
      status.value = false
      loading.value = false
      throw new Error(e)
    }
  }
  return {
    loading,
    status,
    fetch
  }
}