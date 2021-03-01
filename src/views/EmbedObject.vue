<template>
  <div id="embedObject">
    <iframe :src="pdfUrl" width="100%" height="100%">
      This browser does not support PDFs. Please download the PDF to view it:
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: require("../assets/test.pdf"),
    };
  },
};
</script>

<style lang="scss" scoped>
#embedObject {
  width: 100%;
  height: 100%;
}
</style>