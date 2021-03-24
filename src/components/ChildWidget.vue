<template>
  <div>
    {{ temp }}
    <button @click="updateProps">修改父组件props绑定的data</button>
  </div>
</template>

<script>
export default {
  props: {
    father: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      temp: "",
    };
  },
  methods: {
    updateProps() {
        this.temp=666
        this.$emit('update:father', this.temp)
    },
  },
  watch: {
    father: {
      immediate: true,
      handler: function (va) {
        this.temp = va;
      },
    },
  },
  computed: {
    aa() {
      return this.father;
    },
  },
};
</script>

<style>
</style>