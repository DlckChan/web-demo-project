<template>
  <div class="navigation matchParent flex">
    <div
      :class="`menuItem ${index==menuActiveIndex?`isActive`:``}`"
      v-for="(menuItem,index) in menuData"
      :key="index"
      @click="handleSelectMenu(index)"
    >{{menuItem.name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        { name: "主页", link: "home" },
        { name: "主题切换", link: "theme-switch" },
        { name: "大屏适配方案", link: "screen-adaptation" },
        {name:'预览PDF',link:"embed-object"},
        {name:'el组件适配',link:'el-adaptation'},
        {name:'Vue参数传递',link:'vue-props'},
        {name:'vw适配样例',link:'vw-adaptation'},
        {name:'about',link:'about'}
      ],
      menuActiveIndex: 0,
    };
  },
  created() {
    this.initMenuActive();
  },
  methods: {
    //用户选择菜单
    handleSelectMenu(index) {
      if (this.menuActiveIndex == index) return;
      this.menuActiveIndex = index;
      this.$router.replace(this.menuData[index].link);
    },
    //初始化菜单
    initMenuActive() {
      if (!window.sessionStorage.getItem(this.$constant.MENU_ACTIVE_INDEX)) {
        window.sessionStorage.setItem(this.$constant.MENU_ACTIVE_INDEX, 0);
      }
      this.menuActiveIndex = window.sessionStorage.getItem(this.$constant.MENU_ACTIVE_INDEX);
      this.$router
        .replace(this.menuData[this.menuActiveIndex].link)
        .catch(() => {
          //console.log("重复路由");
        });
    }
  },
  watch: {
    //监听菜单index变化
    menuActiveIndex() {
      window.sessionStorage.setItem(this.$constant.MENU_ACTIVE_INDEX, this.menuActiveIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: var(--navColor);
  flex-direction: column;
  .menuItem {
    padding: 0.5rem;
    &:hover {
      background: var(--navActiveBackgroundColor);
      cursor: pointer;
    }
  }
  .isActive {
    color: var(--navActiveColor);
    background: var(--navActiveBackgroundColor);;
  }
}
</style>