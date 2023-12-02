<template>
  <div class="field-container-btn">
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <button :style="{ backgroundColor: buttonColor }" @click="submit">
      <font-awesome-icon
        v-if="prefix"
        :icon="['fas', prefix]"
      ></font-awesome-icon>
      {{ text }}
    </button>
  </div>
</template>
<script>
export default {
  name: "SubmitButton",
  props: {
    text: {
      default: 0,
    },
    prefix: {
      default: 0,
    },
  },
  data() {
    return {
      loading: false,
    };
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
    submit() {
      this.$emit("submit");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/main.scss";
.field-container-btn button {
  @include button-properties;
  color: $color-black;
}

@media screen and (max-width: 768px) {
  .field-container-btn button {
    font-size: 4vw;
  }
}

@media screen and (max-width: 480px) {
  .field-container-btn button {
    font-size: 4vw;
  }
}
</style>
