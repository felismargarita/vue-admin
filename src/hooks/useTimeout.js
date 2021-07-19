export default (fn,delay = 0)=>{
  const timer = setTimeout(()=>{
    fn()
    clearTimeout(timer)
  },delay)
}