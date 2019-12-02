<template>
  <div class="iconbanner">
    <div class="icon_item">点赞</div>
    <div class="icon_item">收藏</div>
    <div class="icon_item">评论</div>
    <div class="icon_middle">分享</div>
    <div class="icon_item">微博</div>
    <div class="icon_item">微信</div>
    <div class="icon_item">QQ</div>
  </div>
</template>

<script>
export default {
  name: "iconbanner"
};
</script>

<style lang="less" scoped>
.iconbanner {
  position: fixed;
  margin-left: -84px;
  top: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon_middle {
    margin-top: 30px;
    margin-bottom: 12px;
  }
  .icon_item {
    width: 36px;
    height: 36px;
    margin-bottom: 10px;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon_item:hover {
    background-color: #1586e2;
  }
}
</style>
