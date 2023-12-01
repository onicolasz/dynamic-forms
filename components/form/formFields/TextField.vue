<template>
  <div class="field-input-container">
    <input
      placeholder="Sua resposta..."
      class="field-text"
      :rules="textRules"
    />
    <div class="field-container-btn">
      <button :style="{ backgroundColor: buttonColor }" @click="submitAnswer">
        <small v-if="!loading">Responder</small>
        <div v-else class="loading-indicator"></div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextField",
  props: {
    field: {
      default: 0,
    },
  },
  data() {
    return {
      isIncreasing: true,
      loading: false,
      textRules: [(v) => !!v || "Resposta é necessária"],
      emailRules: [
        (v) =>
          (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            v
          ) &&
            v != null) ||
          "Email Incorreto",
      ],
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
    submitAnswer() {
      this.loading = true;
    },
  },
};
</script>
<style lang="scss">
@import "../../../assets/css/main.scss";

input {
  border: none;
  outline: none;
  background-color: transparent;
  padding: 2px 0;
  color: #ffffff;
  border-bottom: 0.5px solid #ffffff;
  position: relative;
  width: 100%;
  font-size: 90%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.267);
  }
}

.field-container-btn button {
  @include button-properties;
}

.loading-indicator {
  margin-left: 10px !important;
  margin-right: 10px !important;
  border: 1px solid #ffffff;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 768px) {
  input {
    font-size: 38px;
  }

  .loading-indicator {
    width: 20px;
    height: 20px;
  }

  .field-container-btn button {
    width: 100%;
    max-width: 100px;
    font-size: 38px;
  }
}

@media screen and (max-width: 480px) {
  input {
    font-size: 22px;
  }

  .loading-indicator {
    width: 20px;
    height: 20px;
  }

  .field-container-btn button {
    width: 100%;
    max-width: 90px;
    font-size: 18px;
  }
}
</style>
