<template>
  <div class="login">
    <div class="login-item">
      <h1 class="login-item__title">
        欢迎回来
      </h1>
      <input
        type="text"
        placeholder="手机号"
        class="login-item__input"
        v-phone="tel">
      <input
        type="password"
        placeholder="密码"
        class="login-item__input"
        maxlength="18"
        v-model="password">
      <button class="login-item__input login-item__submit" @click="handleLogin">
        登录
      </button>
    </div>
    <div class="login-item">
      <img
        src="./login.png"
        alt="登录"
        class="login-item__img">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      console.log('处理登录')
      sessionStorage.setItem('user_id', this.tel)
      this.$router.replace({path: '/home'})
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      font-size: 36px;
    }
    &__input {
      outline: none;
      background: none;
      border: none;
      line-height: 48px;
      width: 50%;
      font-size: 18px;
      border-bottom: 1px solid #d0d0d0;
      margin-top: 33px;
    }
    &__submit {
      border: none;
      background: #0a844b;
      margin-top: 66px;
      color: #fff;
    }
    &__img {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
