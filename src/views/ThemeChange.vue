<template>
  <div class="ThemeSwitchContainer flex matchParent">
    <a
      href
      @click.prevent="switchTheme(themeItem.value)"
      v-for="(themeItem,index) in themeData"
      :key="index"
    >{{themeItem.name}}</a>
    实现方法是css variable（不支持IE浏览器）
  </div>
</template>

<script>
export default {
  methods: {
    switchTheme(themeText) {
      //console.log(themeText);
      this.$emit("swichTheme", themeText);
    }
  },
  data() {
    return {
      themeData: [
        {
          name: "浅色模式",
          value: this.$constant.THEME_LIGHT
        },
        {
          name: "深色模式",
          value: this.$constant.THEME_DARK
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.ThemeSwitchContainer {
  padding: var(--commonPadding);
  justify-content: center;

  > a {
    text-decoration: underline;
    margin-right: 2rem;
    height: 1.5rem;
  }
}
</style>