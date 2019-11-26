<template>
  <div class="reg_body">
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">{{
      msg
    }}</el-button>
    <el-dialog :title="msg" :visible.sync="dialogFormVisible" width="318px">
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
          <el-button type="primary" @click="dialogFormVisible = false">{{
            msg
          }}</el-button>
        </el-form-item>
      </el-form>
      <slot v-if="showReg">{{ dectext }}</slot>
      <slot v-if="!showReg">{{ dectext }} 注册 忘记密码</slot>
      <div slot="footer" class="dialog-footer">
        注册登录即表示同意用户协议、隐私政策
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        showReg: true,
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        dectext: ""
      }
      // formLabelWidth: "120px"
    };
  },
  computed: {
    //注册的页面
    showReg() {
      return this.msg === "注册" ? true : false;
    }
  },
  created() {
    this.judge();
  },
  methods: {
    judge() {
      if (this.msg === "注册") {
        this.dectext = "已有账号登录";
      } else {
        this.dectext = "没有账号？";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.reg_body .el-dialog__title {
  font-weight: bold;
}

.reg_body .el-dialog__footer {
  text-align: center !important;
}
</style>
