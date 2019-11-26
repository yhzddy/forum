<template>
  <div class="home">
    <RegisterAndLogin msg="注册"> </RegisterAndLogin>
    <RegisterAndLogin msg="登录"></RegisterAndLogin>
  </div>
</template>

<script>
// @ is an alias to /src

import RegisterAndLogin from "@/components/RegisterAndLogin.vue";

export default {
  name: "home",
  components: {
    RegisterAndLogin
  },
  data() {
    return {
      showlogin: false,
      showregister: false
    };
  }
};
</script>
