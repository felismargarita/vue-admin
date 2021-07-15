
import {onMounted, ref} from 'vue'

const fakeFecther = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(
        [
          {name:'Tom',age:29,sex:'male'},
          {name:'Mary',age:3,sex:'male'},
          {name:'Lucy',age:80,sex:'female'},
          {name:'Peter',age:29,sex:'male'},
          {name:'Kite',age:3,sex:'male'},
          {name:'Lucas',age:80,sex:'female'},
          {name:'Allen',age:29,sex:'male'},
          {name:'David',age:3,sex:'male'},
          {name:'Felir',age:80,sex:'female'},
          {name:'Green',age:29,sex:'male'},
        ]
      )
    },Math.random()*3000)
  })
}

export default (dataFetcher = fakeFecther)=>{
  const loading = ref(false)
  const data = ref([])
  onMounted(async ()=>{
    loading.value = true
    data.value = await fakeFecther()
    loading.value = false
  })
  return {
    data,
    loading
  }
}