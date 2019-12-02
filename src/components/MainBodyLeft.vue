<template>
  <div class="main">
    <div class="left">
      <!-- 分导航 -->
      <div class="main_nav">
        <slot><span class="main_nav_title">相关推荐</span></slot>
        <!-- <ul class="nav_list">
          <li class="nav_list_item ">
            <router-link to="{name:home}">热门</router-link>
          </li>
          <li class="nav_list_item ">
            <router-link to="{name:home}">最新</router-link>
          </li>
          <li class="nav_list_item ">
            <router-link to="{name:home}">热榜</router-link>
          </li>
        </ul> -->
      </div>
      <!-- 主题左部 -->
      <div class="left_body">
        <div class="info_box">
          <!-- 详细信息 -->
          <div class="info_row meta_row">
            <ul class="meta-list">
              <li class="meta_item">
                <router-link to="{name:home}" class="item">专栏</router-link>
              </li>
              <li class="meta_item">
                <router-link to="{name:home}" class="item">刘小夕</router-link>
              </li>
              <li class="meta_item">
                <router-link to="{name:home}" class="item">1小时前</router-link>
              </li>
              <li>
                <router-link to="{name:home}" class="item">前端</router-link>
              </li>
            </ul>
          </div>
          <!-- 标题 -->
          <div class="info_row title_row">
            <router-link to="{name:home}" class="item"
              >不容错过的 Babel7 知识不容错过的 Babel7 知识不容错过的 Babel7
              知识</router-link
            >
          </div>
          <!-- 赞的按钮 第三行 -->
          <div class="info_row action_row">
            <ul class="action_list">
              <li class="action_list_item">
                <router-link to="{name:home}" class="title-box">
                  <img
                    src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
                    alt=""
                  />
                  <span>35</span>
                </router-link>
              </li>
              <li class="action_list_item">
                <router-link to="{name:home}" class="title-box">
                  <img
                    src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
                    alt=""
                  />
                  <span>8</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="info_img">
          <img
            src="https://user-gold-cdn.xitu.io/2019/12/2/16ec4746663424a5?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
            alt=""
            class="img_meta"
          />
        </div>
      </div>
      <!-- 第二个 -->
      <div class="left_body">
        <div class="info_box">
          <!-- 详细信息 -->
          <div class="info_row meta_row">
            <ul class="meta-list">
              <li class="meta_item">
                <router-link to="{name:home}" class="item">专栏</router-link>
              </li>
              <li class="meta_item">
                <router-link to="{name:home}" class="item">刘小夕</router-link>
              </li>
              <li class="meta_item">
                <router-link to="{name:home}" class="item">1小时前</router-link>
              </li>
              <li>
                <router-link to="{name:home}" class="item">前端</router-link>
              </li>
            </ul>
          </div>
          <!-- 标题 -->
          <div class="info_row title_row">
            <router-link to="{name:home}" class="item"
              >不容错过的 Babel7 知识不容错过的 Babel7 知识不容错过的 Babel7
              知识</router-link
            >
          </div>
          <!-- 赞的按钮 第三行 -->
          <div class="info_row action_row">
            <ul class="action_list">
              <li class="action_list_item">
                <router-link to="{name:home}" class="title-box">
                  <img
                    src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
                    alt=""
                  />
                  <span>35</span>
                </router-link>
              </li>
              <li class="action_list_item">
                <router-link to="{name:home}" class="title-box">
                  <img
                    src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
                    alt=""
                  />
                  <span>8</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="info_img">
          <img
            src="https://user-gold-cdn.xitu.io/2019/12/2/16ec4746663424a5?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
            alt=""
            class="img_meta"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainbodyleft"
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  background-color: #fff;
  .main_nav {
    padding: 16px 12px;
    font-size: 14px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    .main_nav_title {
      font-size: 16px;
      font-weight: bold;
      padding: 0 12px;
    }
  }
  .left_body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    .info_box {
      padding: 18px 24px;
      .info_row {
        .meta-list {
          display: flex;
          // color：#b2bac2；
          .item:after {
            content: "·";
            font-weight: 100;
            margin: 0px 4px;
            color: #007fff;
          }
        }
      }
      .meta_row {
        font-size: 12px;
      }
      .title_row {
        margin: 6px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        line-height: 40px;
        font-weight: bold;
        a {
          color: #000000;
        }
      }
      .action_row {
        .action_list {
          display: flex;
          margin-top: 20px;
          .action_list_item {
            display: flex;
            align-items: center;
            // justify-content: center;
            height: 24px;
            font-size: 14px;
            // line-height: 36px;
            border-radius: 1px;
            border: 1px solid #edeeef;
            font-weight: 700;
            .title-box {
              display: flex;
              align-items: center;
              padding: 0 10px;
              height: 100%;
            }
          }
        }
      }
    }
    .info_img {
      width: 60px;
      height: 60px;
      border-radius: 2px;
      margin-right: 24px;
      .img_meta {
        width: 100%;
      }
    }
  }
}
</style>
