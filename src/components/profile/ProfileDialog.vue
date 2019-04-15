<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
      @closed="handleClose">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules">
        <el-form-item label="用户编号" prop="id">
          <el-input v-model="ruleForm.id" :maxlength="5" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户备注" prop="count">
          <el-input v-model="ruleForm.count" :maxlength="10"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'ruleForm',
    event: 'change'
  },
  props: {
    ruleForm: {
      type: Object,
      default () {
        return {
          id: '',
          sex: 0,
          count: ''
        }
      }
    },
    title: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      dialogVisible: false,
      rules: {
        id: [
          { required: true, message: '请输入用户编号', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择用户性别', trigger: 'change' }
        ],
        count: [
          { required: true, message: '请输入用户统计', trigger: 'change' }
        ]
      }
    }
  },

  methods: {
    show () {
      this.dialogVisible = true
    },

    handleClose () {
      this.$refs.ruleForm.resetFields()
      this.$emit('handleClose')
    },

    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('handleSubmit')
          this.dialogVisible = false
        } else {
          this.$message.error('输入信息有误，请重新输入!')
        }
      })
    }
  }
}
</script>

