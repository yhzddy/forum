<template>
  <div class="home">
    <!-- 导航 -->
    <div class="home_banner">
      <div class="container">
        <div class="container_header">
          <a>
            <img
              data-v-81edda8e=""
              src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
              alt="掘金"
              class="logo-img"
            />
          </a>
          <div class="nav">
            <ul class="nav_list">
              <li class="nav_list_item">
                <Banner />
              </li>
              <li class="nav_list_item">
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="searchValue"
                >
                </el-input>
              </li>
              <li class="nav_list_item">
                <img
                  src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg"
                  class="icon"
                />
                <span class="wenzhangziti"
                  ><router-link :to="{ name: 'drafts' }"
                    >写文章</router-link
                  ></span
                >
              </li>
              <li class="nav_list_item">
                <Login class="login" :slg="Log" @transreg="showreg"></Login>
                <Register :srg="Reg" @translog="showlog"> </Register>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav_second">
          <Banner
            :banHeight="46"
            :banFont="'banfont14'"
            :taglist="secondBanner"
            style="justify-content:initial;"
          />
        </div>
      </div>
    </div>
    <!-- 主题 -->
    <div class="home_body">
      <MainBodyLeft>
        <ul class="nav_list">
          <li class="nav_list_item ">
            <router-link to="{name:home}">热门</router-link>
          </li>
          <li class="nav_list_item ">
            <router-link to="{name:home}">最新</router-link>
          </li>
          <li class="nav_list_item ">
            <router-link to="{name:home}">热榜</router-link>
          </li>
        </ul>
      </MainBodyLeft>
      <MainBodyRight />
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Banner from "@/components/Banner.vue";
import MainBodyLeft from "@/components/MainBodyLeft.vue";
import MainBodyRight from "@/components/MainBodyRight.vue";

export default {
  name: "home",
  data() {
    return {
      secondBanner: [
        {
          name: "推荐",
          pathName: "home"
        },
        {
          name: "后端",
          pathName: "hot"
        },
        {
          name: "前端",
          pathName: "topic"
        },
        {
          name: "Android",
          pathName: "topic"
        },
        {
          name: "iOS",
          pathName: "topic"
        },
        {
          name: "人工智能",
          pathName: "topic"
        },
        {
          name: "开发工具",
          pathName: "topic"
        },
        {
          name: "代码人生",
          pathName: "topic"
        },
        {
          name: "阅读",
          pathName: "topic"
        }
      ],
      searchValue: " ",
      Reg: false,
      Log: false
    };
  },
  components: {
    Banner,
    Register,
    Login,
    MainBodyLeft,
    MainBodyRight
  },
  methods: {
    showreg(val, va2) {
      console.log("让注册页面为" + val);
      this.Reg = val;
      this.Log = va2;

      console.log("让注册页面为reg" + this.Reg);
    },
    showlog(val, va2) {
      console.log("让登录页面为" + val + va2);
      this.Log = val;
      this.Reg = va2;
    }
  }
};
</script>

<style lang="less" scoped></style>
