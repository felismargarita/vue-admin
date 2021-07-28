<template>
    <span>鼠标滚轮相对值，范围：80-120：{{current}}</span>
    <button @click="reset">重置</button>
</template>
<script>
import {defineComponent} from 'vue'
import useMouseWheel from '@/hooks/useMouseWheel'
export default defineComponent({
    name:'MouseWheel',
    setup(){
        const {current,reset} = useMouseWheel(100,{min:80,max:120})
        return {
            current,
            reset
        }
    }
})
</script>