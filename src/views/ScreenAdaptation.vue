<template>
  <!-- Create By Chenqf96 -->
  <div class="ScreenAdaptation matchParent flex">
    <div class="titleDiv commonBorder flex">大屏标题--适配所有屏幕正常显示</div>
    <div class="body commonBorder flex">
      <div class="bodyleft commonBorder flex">
        <div class="left1 commonBorder"></div>
        <div class="left2 commonBorder"></div>
        <div class="left3 commonBorder"></div>
      </div>
      <div class="bodycenter commonBorder flex">
        <div class="center1 commonBorder"></div>
        <div class="center2 commonBorder"></div>
      </div>
      <div class="bodyright commonBorder flex">
        <div class="right1 commonBorder"></div>
        <div class="right2 commonBorder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  watch: {},
  methods: {}
};
</script>

<style  lang='scss' scoped>
.ScreenAdaptation {
  padding: var(--commonPadding);
  flex-direction: column;
  .titleDiv {
    height: 10vh;
    border: 1px solid var(--fontColor);
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
  .body {
    flex: 1;
    .bodyleft {
      width: 25%;
      flex-direction: column;
      .left1 {
        height: 33%;
      }
      .left2 {
        height: 33%;
      }
      .left3 {
        height: 34%;
      }
    }
    .bodycenter {
      width: 50%;
      flex-direction: column;
      .center1 {
        height: 80%;
      }
      .center2 {
        height: 20%;
      }
    }
    .bodyright {
      width: 25%;
      flex-direction: column;
      .right1{
          height: 50%;
      }
      .right2{
          height: 50%;
      }
    }
  }
}
</style>


