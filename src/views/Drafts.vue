<template>
  <div class="drafts">
    <div class="editor">
      <div ref="editorElem"></div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "drafts",
  data() {
    return {
      editor: null,
      editorContent: ""
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    //编辑器事件，每次改变会获取其html的内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      this.catachData(this.editorContent); //把这个html通过catachDtat的方法传入到这个容器
    };
    this.editor.customConfig.menus = [
      //菜单配置
      "head", //标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create(); //创建富文本实例
  }
};
</script>

<style lang="less" scoped>
.editor {
  width: 700px;
  height: 710px%;
}
</style>
