<template>
  <div class="profile">
    <base-dialog
      :dialogVisible="dialogVisible"
      @close="handleDialog"
      :title="title">
      <div>
        用户编号：{{ruleForm.id}}
      </div>
      <div>
        用户性别：{{ruleForm.sex}}
      </div>
      <div>
        用户备注：{{ruleForm.count}}
      </div>
    </base-dialog>
    <div class="profile-header">
      <easy-table :dataList="dataList" :titleList="titleList">
        <template v-slot:id="slotProps">
          <h1>
            {{slotProps.row.id}}
          </h1>
        </template>
      </easy-table>
    </div>
    <span v-top="0" class="top">
      <i class="el-icon-top"></i>
    </span>
  </div>
</template>

<script>
import EasyTable from '@/components/easyTable/easyTable'
import BaseDialog from '@/components/baseDialog/baseDialog'

export default {
  components: {
    EasyTable,
    BaseDialog
  },
  data () {
    return {
      dataList: [],
      title: '修改提醒',
      dialogVisible: false,
      ruleForm: {
        id: '',
        sex: 0,
        count: ''
      }
    }
  },
  created () {
    let list = []
    for (let i = 1; i < 100; i++) {
      list.push({
        id: i,
        sex: Math.random() > 0.5 ? 0 : 1,
        count: 100 + i
      })
    }
    this.dataList = list
    this.titleList = [
      {
        key: 'id',
        text: '用户编号'
      },
      {
        key: 'sex',
        text: '用户性别',
        // 表格提供过来数据的方法
        filter: (item) => {
          return item.sex ? '男' : '女'
        }
      },
      {
        key: 'count',
        text: '用户备注'
      },
      // 表格提供插入HTML元素的方法
      {
        key: 'html',
        text: '操作',
        width: 150,
        htmlArray: [
          {
            htmlString: '<a class="link">修改</a>',
            clickEvent: this.handleChange
          },
          {
            htmlString: '<a class="link">删除</a>',
            clickEvent: this.handleDelete
          }
        ]
      }
    ]
  },
  methods: {
    // 删除
    handleDelete (item) {
      this.title = '删除提醒'
      this.dialogVisible = true
      this.ruleForm = item
    },
    // 修改
    handleChange (item) {
      this.title = '修改提醒'
      this.dialogVisible = true
      this.ruleForm = item
    },
    handleClick () {
      this.$router.push({name:'Log',params:{id:100}})
    },
    handleDialog () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="less">
.profile {
  background: #fff;
  border-radius: 5px;
  padding: 10px;
}
.link {
  color: #0a844b;
  font-weight: 800;
  margin-right: 10px;
}
.link-add {
  padding: 10px;
  font-size: 18px;
  display: inline-block;
  background: rgba(1,126,102,0.08);
  margin-bottom: 10px;
}
.top {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #7a6e6e;
  font-size: 20px;
  padding: 10px;
  color: #fff;
}
</style>
