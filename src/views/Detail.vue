<template>
  <div class="detail">
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
                  <span class="wenzhangziti">写文章</span>
                </li>
                <li class="nav_list_item">
                  <Login class="login" :slg="Log" @transreg="showreg"></Login>
                  <Register :srg="Reg" @translog="showlog"> </Register>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 主题 -->
      <div class="home_body">
        <IconBanner />
        <div class="detail_body">
          <div class="article_content">
            <div class="author_info">
              <div class="meta_avator">
                <router-link to="{name:home}">
                  <img
                    src=" https://mirror-gold-cdn.xitu.io/16b7ac351c7186238df?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
                    alt="头像"
                    class="meta_avator_style"
                /></router-link>
              </div>
              <div class="author-info-box">
                <router-link to="{name:home}" class="author_style"
                  >啧啧啧啧啧啧</router-link
                >
                <div class="meta_box">
                  <time datetime="2019-11-13T10:08:15.093Z"
                    >2019年11月13日</time
                  >
                  <span>阅读 11678</span>
                </div>
              </div>
              <button class="follow_button">关注</button>
            </div>
          </div>
          <MainBodyLeft> </MainBodyLeft>
        </div>
        <MainBodyRight />
      </div>
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Banner from "@/components/Banner.vue";
import MainBodyLeft from "@/components/MainBodyLeft.vue";
import MainBodyRight from "@/components/MainBodyRight.vue";
import IconBanner from "@/components/IconBanner.vue";
export default {
  name: "detail",
  components: {
    Register,
    Login,
    Banner,
    MainBodyLeft,
    MainBodyRight,
    IconBanner
  }
};
</script>

<style lang="less" scoped>
.detail {
  .home_body {
    margin-top: 80px;
    .detail_body {
      background-color: #fff;
    }
    .article_content {
      padding: 24px 24px 0px 24px;
      .author_info {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .meta_avator {
          width: 40px;
          height: 40px;
          margin-right: 12px;
          .meta_avator_style {
            border-radius: 50%;
          }
        }
        .author-info-box {
          .author_style {
            font-size: 16px;
            font-weight: 700;
            color: black;
          }
          .meta_box {
            color: #909090;
            font-size: 13px;
            line-height: 26px;
            letter-spacing: 1px;
          }
        }
        .follow_button {
          margin: 0 0 0 auto;
          padding: 0;
          width: 55px;
          height: 26px;
          font-size: 13px;
          border: 1px solid #6cbd45;
          color: #6cbd45;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
