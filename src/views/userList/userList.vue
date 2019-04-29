<template>
  <div class="profile">
    <div class="profile-header">
      <div>
        <a class="link link-add" @click="handleAdd">添加</a>
      </div>
      <easy-table :dataList="dataList" :titleList="titleList">
        <template v-slot:id="slotProps">
          <h1>
            {{slotProps.row.id}}
          </h1>
        </template>
      </easy-table>
      <list-dialog
        ref="dialog"
        v-model="ruleForm"
        @handleSubmit="handleSubmit"
        @handleClose="handleClose"
        :title="title">
      </list-dialog>
    </div>
  </div>
</template>

<script>
import EasyTable from '@/components/easyTable/easyTable'
import ListDialog from './userListDialog'

export default {
  components: {
    EasyTable,
    ListDialog
  },
  data () {
    return {
      dataList: [],
      title: '修改用户',
      ruleForm: {
        id: '',
        sex: 0,
        count: ''
      }
    }
  },
  created () {
    let list = []
    for (let i = 1; i < 20; i++) {
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
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let index = this.dataList.findIndex(current => current.id === item.id)
        if (index > -1) {
          this.dataList.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }
      })
    },
    // 修改
    handleChange (item) {
      this.title = '修改用户'
      this.ruleForm = {...item}
      this.cache = this.dataList.findIndex(current => current.id === item.id)
      this.$refs.dialog.show()
    },

    handleAdd () {
      this.title = '添加用户'
      this.$refs.dialog.show()
    },

    handleSubmit () {
      let { id, sex, count } = this.ruleForm
      if (this.cache > -1) {
        this.dataList.splice(this.cache, 1, { id, sex, count })
      } else {
        this.dataList.push({ id, sex, count })
      }
    },
    handleClose () {
      this.cache = -1
      this.ruleForm = {
        id: this.dataList.length + 1,
        sex: 1,
        count: ''
      }
    },
    handleClick () {
      this.$router.push({name:'Log',params:{id:100}})
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
</style>
