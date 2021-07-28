import {onUnmounted, ref} from 'vue'
export default (init = 0,options = {
    max:Number.MAX_VALUE,
    min:Number.MIN_VALUE
})=>{
    const current = ref(init)
    const callback = e=>{
        const {deltaY} = e
        if(deltaY<0 && current.value<options.max){
            current.value ++
        }
        if(deltaY>0 && current.value>options.min){
            current.value --
        }
    }
    document.addEventListener('wheel',callback)
    onUnmounted(()=>{
        document.removeEventListener('wheel',callback)
    })
    return {
        reset:()=>current.value = init,
        current
    }
}