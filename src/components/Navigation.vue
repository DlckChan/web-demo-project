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
        { name: "主页", link: "Home" },
        { name: "主题切换", link: "ThemeSwitch" },
        { name: "大屏适配方案1", link: "ScreenAdaptation" },
        {name:'大屏适配方案2',link:""}
      ],
      menuActiveIndex: 0,
      MENUINDEX: this.$constant.menuActiveIndex
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
      if (!window.localStorage.getItem(this.MENUINDEX)) {
        window.localStorage.setItem(this.MENUINDEX, 0);
      }
      this.menuActiveIndex = window.localStorage.getItem(this.MENUINDEX);
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
      window.localStorage.setItem(this.MENUINDEX, this.menuActiveIndex);
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
      background: lightgray;
      cursor: pointer;
    }
  }
  .isActive {
    color: var(--navActiveColor);
  }
}
</style>