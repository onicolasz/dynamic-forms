<template>
  <div class="nav-button-container" :style="{ color: textColor }">
    <div class="nav-button" @click="decrement">
      <font-awesome-icon
        :icon="['fas', 'arrow-up']"
        size="xs"
      ></font-awesome-icon>
    </div>

    <div class="nav-button" @click="increment">
      <font-awesome-icon
        :icon="['fas', 'arrow-down']"
        size="xs"
      ></font-awesome-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormNavbar",
  props: {
    styles: {
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonColor() {
      return this.$store.state.buttonColor;
    },
    textColor() {
      return this.$store.state.textColor;
    },
  },
  methods: {
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 16px;
}

.nav-button {
  cursor: pointer;
  font-size: 2.4vw;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .nav-button {
    font-size: 8vw;
  }
}

@media screen and (max-width: 480px) {
  .nav-button {
    font-size: 8vw;
  }
}

.nav-button:hover {
  color: v-bind(buttonColor);
}
</style>
