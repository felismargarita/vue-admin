<template>
  <div>
    <n-data-table size="small" :loading="loading" :singleLine="false" :rowKey="row=>row.name" :columns="columns" :data="data"/>
  </div>
</template>
<script>
import {defineComponent,computed} from 'vue'
import useDataTable from '@/hooks/useDataTable'
export default defineComponent({
  name:'DataTableDemo',
  setup(){
    const {data,loading} = useDataTable()
    return {
      data,
      loading,
      columns:[
        {title:'姓名',key:'name'},
        {title:'年龄',key:'age'},
        {title:'性别',key:'sex'},
      ]
    }
  }
})
</script>