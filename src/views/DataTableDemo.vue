<template>
  <div>
    <n-data-table size="small" :loading="loading" :singleLine="false" :rowKey="row=>row.name" :columns="columns" :data="data"/>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import useDataTable from '@/hooks/useDataTable'
import {NDataTable} from 'naive-ui'
export default defineComponent({
  name:'DataTableDemo',
  components:{NDataTable},
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