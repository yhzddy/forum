<template>
  <div class="container">
    <!-- <RegisterAndLogin msg="注册"> </RegisterAndLogin>
    <RegisterAndLogin msg="登录"></RegisterAndLogin> -->
    <div class="container_header">
      <Banner />
    </div>
    <!-- <div class="line">
      <div class="container_main">
        <div class="container_main_left">文章</div>
        <div class="container_main_right">
          <div class="container_main_right_side">右边side</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

// import RegisterAndLogin from "@/components/RegisterAndLogin.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  components: {
    Banner
    // RegisterAndLogin
  },
  data() {
    return {
      showlogin: false,
      showregister: false
    };
  }
};
</script>

<style lang="less" scoped>
// .wrapper {
//   display: flex;
// }

// .list {
//   width: 200px;
//   background: #999;
// }

// .context {
//   flex: 1;
//   height: 500px;
// }
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  background-color: rgb(202, 23, 23);
}

.line {
  position: relative;
}
.container_header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.container_main_left {
  position: absolute;
  top: 0;
  left: 0;
  width: 700px;
  background-color: rgb(10, 9, 9);
  box-sizing: border-box;
}
.container_main_right {
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  background-color: #fac;
}

.container_main_right_side {
  position: fixed;
}
</style>
