<template>
  <div class="login-page">
    <div class="login-box">
      <div class="system-title">vue-admin 管理系统</div>
      <n-form ref="formRef" :model="form" :rules="rules">
        <n-form-item path="username">
          <n-input placeholder="" class="login-input" size="large" v-model:value="form.username">
            <template #prefix>
              <n-icon>
                <User/>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input type="password" placeholder="" class="login-input" size="large" v-model:value="form.password">
            <template #prefix>
              <n-icon>
                <Lock/>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button type="primary"  attr-type="button" :loading="loading" block size="large" @click="login">登陆</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
<script>
import { User,Lock} from '@vicons/fa'

export default {
  name:'Login',
  components:{User,Lock},
  data(){
    return {
      loading:false,
      form:{
        username:'',
        password:''
      },
      rules:{
        username:{
          required:true,
          message:'请输入账户名',
          trigger: ['input', 'blur']
        },
        password:{
          required:true,
          message:'请输入密码',
          trigger: ['input', 'blur']
        }
      }
    }
  },
  methods:{
    login(){
      this.$refs['formRef'].validate((errors)=>{
        if(!errors){
          this.loading = true
          setTimeout(()=>{
            this.$router.push('/')
          },3000*Math.random())
        }
      })
    }  
  }

}
</script>
<style lang="scss" scoped>
.login-page {
  background: #2d3a4b;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 360px;
    height: 300px;
    .n-form-item {
      grid-template-rows:0;
    }
    .system-title {
      font-size: 26px;
      font-weight: bold;
      color: #eee;
      text-align: center;
      margin-bottom: 12px;
    }
  }
}
</style>