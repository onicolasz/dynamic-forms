<template>
  <div class="field-container-btn">
    <button
      :style="{ backgroundColor: buttonColor }"
      @click="submit"
      :disabled="loading"
    >
      <div v-if="loading" class="loader" :style="{ color: textColor }">
        <span :style="{ background: textColor }"></span>
        <span :style="{ background: textColor }"></span>
        <span :style="{ background: textColor }"></span>
      </div>
      <div v-else>
        <font-awesome-icon
          v-if="prefix"
          :icon="['fas', prefix]"
        ></font-awesome-icon>
        {{ text }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    text: {
      default: "Responder",
    },
    prefix: {
      default: null,
    },
    loading: {
      default: false,
    },
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
  font-size: 1.2vw;
}
.loader {
  padding: 0 8px;
}

.loader span {
  display: inline-block;
  border-radius: 50%;
  width: 0.5vw;
  height: 0.5vw;
  margin-right: 0.2vw;
  transition: all 0.3s;
  animation: animate 1s infinite ease-in-out;
}

@keyframes animate {
  0% {
    transform: scale(2);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.loader span:nth-child(1) {
  animation-delay: 0;
}

.loader span:nth-child(2) {
  animation-delay: 0.1s;
}

.loader span:nth-child(3) {
  animation-delay: 0.2s;
}

@media screen and (max-width: 768px) {
  .field-container-btn button {
    font-size: 2vw;
  }
}

@media screen and (max-width: 480px) {
  .field-container-btn button {
    font-size: 4vw;
  }
}
</style>
