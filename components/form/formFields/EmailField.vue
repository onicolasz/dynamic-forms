<template>
  <div class="field-input-container">
    <input
      placeholder="exemplo@exemplo.com"
      class="field-text"
      v-model="answer"
      :style="{
        color: textColor,
        borderBottom: '0.5px solid ' + textColor,
      }"
    />
    <div class="error-message" v-if="!valid">Informe um E-mail válido.</div>
    <SubmitButton text="Responder" @submit="submitAnswer" />
  </div>
</template>
<script>
import SubmitButton from "./SubmitButton.vue";
export default {
  name: "TextField",
  props: {
    field: {
      default: 0,
    },
    formAnswer: {
      default: Object,
    },
  },
  components: {
    SubmitButton,
  },
  data() {
    return {
      isIncreasing: true,
      loading: false,
      answer: null,
      valid: true,
      emailRule:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
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

      if (!this.emailRule.test(this.answer)) {
        this.valid = false;
        return (this.loading = false);
      }

      return this.$emit("submitAnswer", {
        fieldId: this.field.id,
        answer: this.answer,
      });
    },
  },
  mounted() {
    this.answer = this.formAnswer.answer;
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/main.scss";

input {
  border: none;
  outline: none;
  background-color: transparent;
  padding: 2px 0;
  position: relative;
  width: 100%;
  font-size: 90%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.267);
  }
}

.error-message {
  background-color: $color-error;
  color: $color-white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: fit-content;
  padding: 4px;
  font-size: 0.8vw;
}

.field-container-btn button {
  @include button-properties;
}

@media screen and (max-width: 768px) {
  input {
    font-size: 5vw;
  }

  .field-container-btn button {
    font-size: 4vw;
  }
}

@media screen and (max-width: 480px) {
  input {
    font-size: 5vw;
  }

  .field-container-btn button {
    font-size: 4vw;
  }
}
</style>
