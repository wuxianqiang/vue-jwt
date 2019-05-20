<template>
  <transition name="dialog-fade">
    <div class="dialog" v-show="dialogVisible">
      <div class="dialog-wrapper">
        <div class="dialog-wrapper__title">
          <div>{{title}}</div>
          <a href="javascirpt:;" @click="handleClose">
            <i class="el-icon-close"></i>
          </a>
        </div>
        <div class="dialog-wrapper__content">
          <slot></slot>
        </div>
        <div class="dialog-wrapper__footer">
          <slot name="footer">
            <a href="javascript:;" @click="handleClose">确定</a>
            <a href="javascript:;" @click="handleClose" class="dialog-wrapper__close">取消</a>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    }
  },

  methods: {
    handleClose () {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.3);
  &-fade-enter-active {
    animation: dialog-fadein 0.3s;
    .dialog-wrapper {
      animation: dialog-zoom 0.3s
    }
  }
  &-wrapper {
    margin: auto;
    width: 30%;
    margin-top: 15vh;
    background: #fff;
    border-radius: 2px;
    padding: 20px 30px;

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }

    &__content {
      padding: 30px 0;
    }

    &__footer {
      text-align: right;
    }

    &__close {
      margin-left: 15px;
    }
  }
}
@keyframes dialog-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
}
@keyframes dialog-zoom {
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1)
  }
}
</style>
