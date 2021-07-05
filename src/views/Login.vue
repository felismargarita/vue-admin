<template>
  <div class="login-page">
    <div class="login-box">
      <div class="system-title">vue-admin管理系统</div>
      <a-form-model :model="form">
        <a-form-model-item>
          <a-input class="login-input" size="large" v-model="form.username">
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input class="login-input" size="large" v-model="form.password"/>
        </a-form-model-item>
      </a-form-model>
      <a-button type="primary" block size="large">登陆</a-button>
    </div>
  </div>
</template>
<script>
import UserOutlined from '@ant-design/icons-vue/UserOutlined'
export default {
  name:'Login',
  components:{UserOutlined},
  data(){
    return {
      form:{
        username:'',
        password:''
      }
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
    height: 400px;
    .system-title {
      font-size: 26px;
      font-weight: bold;
      color: #eee;
      text-align: center;
    }
    .login-input {
      margin: 16px 0px;
    }
    .ant-input {
      border-color: #294B6F;
      background-color: #283443;
    }
  }

}
</style>