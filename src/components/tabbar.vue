<template>
  <div class="m-tabbar" :class="{isFixed:fixed}">
    <slot></slot>
  </div>
</template>

<script>
import tabbarItem from "./tabbaritem.vue";

export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  data(){
      return{
          msg:'home'
      }
  },
  computed: {
    value() {
      return this.msg;
    }
  },
  methods: {
    change(ev) {
      this.msg = ev;
    },
    fatherMethod() {
      alert("我是父组件的方法");
    }
  }
};
</script>

<style  scoped>
.m-tabbar {
  background-color: rgb(232, 234, 236);
  height: 44px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-top: 1px solid  rgb(165, 156, 179);
}
.isFixed {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 9;
}
</style>