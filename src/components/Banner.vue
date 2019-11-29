<template>
  <div class="banner" :style="banStyle">
    <ul class="ban_list" :class="banfontName">
      <li v-for="(item, index) in taglist" :key="index" class="ban_item">
        <router-link :to="{ name: item.pathName }" exact>{{
          item.name
        }}</router-link>
      </li>
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
    },
    taglist: {
      type: Array,
      default: function() {
        return [
          {
            name: "首页",
            pathName: "home"
          },
          {
            name: "沸点",
            pathName: "hot"
          },
          {
            name: "话题",
            pathName: "topic"
          },
          {
            name: "小册",
            pathName: "topic"
          },
          {
            name: "活动",
            pathName: "topic"
          }
        ];
      }
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
