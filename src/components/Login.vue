<template>
  <div class="reg_body">
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true" class="reg_font">
      {{ tit }}
    </el-button>
    <el-dialog
      :title="tit"
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
            >{{ tit }}</el-button
          >
        </el-form-item>
      </el-form>
      <slot
        >{{ dectext }}
        <span @click="showreg" class="reg_register">注册</span>
        <router-link to="" class="reg_forget">忘记密码</router-link>
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
    slg: Boolean
  },
  data() {
    return {
      dialogFormVisible: false,
      tit: "登录",
      dectext: "没有账号？",
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
    slg: function(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.dialogFormVisible = this.slg;
    }

    // slg: {
    //   immediate: true,
    //   handler: function() {
    //     this.dialogFormVisible = this.slg;
    //   }
    // }
  },
  methods: {
    showreg() {
      this.dialogFormVisible = false;
      this.$emit("transreg", true, false);
    }
  }
};
</script>

<style lang="less" scoped>
.reg_body {
  .reg_font {
    font-size: 16px;
  }
  .el-dialog__title {
    font-weight: bold;
  }
  .reg_register {
    color: #007fff;
    cursor: pointer;
  }
  .reg_forget {
    color: #007fff;
    cursor: pointer;
    float: right;
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
