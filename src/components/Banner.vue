<template>
  <div class="banner" :style="banStyle">
    <ul class="ban_list" :class="banfontName">
      <li class="ban_item">
        <router-link :to="{ name: 'home' }" exact>首页</router-link>
      </li>
      <li class="ban_item">
        <router-link :to="{ name: 'hot' }" exact>沸点</router-link>
      </li>
      <li class="ban_item">
        <router-link :to="{ name: 'topic' }" exact>话题</router-link>
      </li>
      <li class="ban_item">小册</li>
      <li class="ban_item">活动</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    banHeight: {
      type: Number,
      default: 60
    },
    banFont: {
      type: String,
      default: "banfont16"
    }
  },
  name: "Banner",
  data() {
    return {
      banStyle: {
        width: "100%",
        height: this.banHeight + "px"
      },
      banfontName: this.banFont
    };
  }
};
</script>

<style lang="less" scoped>
.banner {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .banfont16 {
    font-size: 16px;
  }
  .banfont14 {
    font-size: 14px;
  }
  .ban_list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .ban_item {
      padding: 0 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #71777c;
      }
      a:hover {
        color: #007fff;
      }
      .router-link-active {
        text-decoration: none;
        color: #007fff;
      }
    }
  }
}
</style>
