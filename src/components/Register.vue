<template>
  <div class="reg_body">
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true" class="reg_font">{{
      msg
    }}</el-button>
    <el-dialog
      :title="msg"
      :visible.sync="dialogFormVisible"
      width="318px"
      class="reg_title"
    >
      <el-form :model="form">
        <el-form-item>
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="dialogFormVisible = false"
            class="reg_submit"
            >{{ msg }}</el-button
          >
        </el-form-item>
      </el-form>
      <slot>
        <span class="reg_forget" @click="showlog">{{ dectext }}</span>
      </slot>
      <div slot="footer" class="dialog-footer">
        注册登录即表示同意用户协议、隐私政策
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    srg: Boolean
  },
  data() {
    return {
      dialogFormVisible: false,
      msg: "注册",
      dectext: "已有账号登录",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
      // formLabelWidth: "120px"
    };
  },
  watch: {
    srg: function(newV, oldV) {
      console.log(newV, oldV);
      this.dialogFormVisible = this.srg;
    }
  },

  methods: {
    showlog() {
      this.dialogFormVisible = false;
      this.$emit("translog", true, false);
    }
  }
};
</script>

<style lang="less" scoped>
.reg_body {
  .reg_font {
    font-size: 16px;
    color: #007fff;
  }
  .el-dialog__title {
    font-weight: bold;
  }
  .reg_forget {
    color: #007fff;
    cursor: pointer;
    display: block;
    text-align: center;
  }
  .reg_forget:after {
    clear: both;
  }
  .reg_submit {
    width: 100%;
    color: #fff;
    background-color: #007fff;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .dialog-footer {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
}
// .reg_body .el-dialog__title {
//   font-weight: bold;
// }

// .reg_body .el-dialog__footer {
//   text-align: center !important;
// }
</style>
