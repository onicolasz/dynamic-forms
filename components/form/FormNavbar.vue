<template>
  <div class="m-4" :style="{ color: textColor }">
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
<style>
.nav-button {
  cursor: pointer;
}

.nav-button:hover {
  color: v-bind(buttonColor);
}
</style>
