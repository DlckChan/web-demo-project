<template>
  <div id="vueProps">
    <child-widget
      @click.native="changeProps"
      ref="child"
      :father.sync="propsIntoChild"
    ></child-widget>
  </div>
</template>

<script>
import childWidget from "../components/ChildWidget";
export default {
  components: {
    "child-widget": childWidget,
  },
  data() {
    return {
      propsIntoChild: 123123132,
    };
  },
  methods: {
    changeProps() {
      //this.propsIntoChild--;
    },
  },
};
</script>

<style lang="scss" scoped>
#vueProps {
  width: 100%;
  height: 100%;
}
</style>