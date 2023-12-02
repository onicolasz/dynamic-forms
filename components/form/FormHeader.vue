<template>
  <div class="header-container">
    <div
      class="background-div"
      :style="{ backgroundColor: 'rgba(' + hexToRgb(textColor) + ', 0.3)' }"
    ></div>
    <div
      v-for="index in maxFields"
      :key="index"
      class="progress-bar"
      :style="getProgressBarStyle(index)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    activeField: {
      default: 0,
    },
    maxFields: {
      default: 0,
    },
  },
  computed: {
    color() {
      return this.$store.state.buttonColor;
    },
    textColor() {
      return this.$store.state.textColor;
    },
  },
  methods: {
    getProgressBarStyle(index) {
      const partWidth = 100 / this.maxFields;
      const isActive = index <= this.activeField;
      const backgroundColor = this.color;
      const scale = isActive ? 1 : 0;

      return {
        flex: `1 1 ${partWidth}%`,
        backgroundColor,
        transformOrigin: "left",
        transform: `scaleX(${scale})`,
        transition: "transform 0.5s ease-in-out",
      };
    },
    hexToRgb(hex) {
      // Remova o # se presente
      hex = hex.replace(/^#/, "");

      // Divida a cor em componentes r, g, b
      let bigint = parseInt(hex, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;

      // Retorne a cor no formato RGB
      return r + "," + g + "," + b;
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  position: relative;
}

.progress-bar {
  height: 100%;
  z-index: 2;
}

.background-div {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
</style>
