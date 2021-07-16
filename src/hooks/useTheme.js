import {onMounted, ref} from 'vue'
import {darkTheme} from 'naive-ui'

export default ()=>{
  const theme = ref(null)
  onMounted(()=>{
    const THEME = localStorage.getItem('THEME') || 'LIGHT'
    theme.value = THEME === 'DARK' ? darkTheme : null
  })
  const toggleTheme = ()=>{
    if(theme.value){
      theme.value = null
      localStorage.setItem('THEME','LIGHT')
    }else{
      theme.value = darkTheme
      localStorage.setItem('THEME','DARK')
    }
  }
  return {theme,toggleTheme}
}