<template>
  <div class="tabbar-item" @click="goToRouter">
    <span class="tabbar-item-icon" v-show="!isHieghter">
      <slot name="icon-normal"></slot>
    </span>
    <span class="tabbar-item-icon" v-show="isHieghter">
      <slot name="icon-active"></slot>
    </span>
    <span class="tabbar-item-text" :style="{color:isHieghter?'red':'rgb(165, 156, 179)'}">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    isRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isHieghter() {
      if (this.$parent.value === this.id) {
        return true;
      }
    }
  },
  methods: {
    goToRouter() {
      this.$parent.change(this.id)
      this.$router.push({name:this.id})
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  /* background-color: red; */
  margin-left: 10px;
  margin-top: 5px;
  width: 50px; 
}
.tabbar-item-icon{
  display: block;
  /* background-color: paleturquoise; */
  text-align: center;
  margin-bottom: 0px;
  line-height: 16px;
}
.tabbar-item-icon img{
  width: 16px;
  height: 16px;
  /* background-color: cadetblue; */
  bottom: 0px;
}
.tabbar-item-text{
  display: block;
  width: 100%;
  /* background-color: plum; */
  text-align: center;
  font-size: 6px;
}
</style>