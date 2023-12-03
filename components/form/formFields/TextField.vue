<template>
  <div class="field-input-container">
    <input
      placeholder="Sua resposta..."
      class="field-text"
      v-model="answer"
      @change="updateRequest"
      @keyup.enter="submitAnswer"
      :style="{
        color: textColor,
        borderBottom: '0.5px solid ' + textColor,
      }"
    />
    <div class="error-message" v-if="!valid">Essa resposta é obrigatória.</div>
    <SubmitButton
      :text="presets.buttonText"
      :prefix="presets.buttonPrefix"
      @submit="submitAnswer"
      :loading="loading"
    ></SubmitButton>
  </div>
</template>
<script>
import SubmitButton from "./SubmitButton.vue";
export default {
  name: "TextField",
  components: {
    SubmitButton,
  },
  props: {
    field: {
      default: 0,
    },
    formAnswer: {
      default: Object,
    },
    valid: {
      default: true,
    },
    loading: {
      default: false,
    },
    presets: {
      default: Object,
    },
  },
  data() {
    return {
      isIncreasing: true,
      answer: null,
    };
  },
  computed: {
    buttonColor() {
      return this.$store.state.buttonColor;
    },
    textColor() {
      return this.$store.state.textColor;
    },
    inputRules() {
      return (() => {
        if (this.presets.rules === undefined) {
          return () => true;
        }

        switch (this.presets.rules) {
          case "text":
            return (answer) => answer !== null && answer.trim() !== "";
          case "email":
            return (answer) =>
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                answer
              );
          default:
            return this.this.presets.rules;
        }
      })();
    },
  },
  methods: {
    submitAnswer() {
      if (
        this.$store.state.submitRequest &&
        this.$store.state.submitRequest.valid
      ) {
        this.$emit("updateValid", true);
        return this.$emit("submitAnswer", this.$store.state.submitRequest);
      }
      return this.$emit("updateValid", false);
    },
    updateRequest() {
      this.$store.commit("setSubmitRequest", {
        fieldId: this.field.id,
        answer: this.answer,
        valid: this.inputRules(this.answer),
      });
    },
  },
  mounted() {
    if (this.formAnswer.answer) {
      this.answer = this.formAnswer.answer;
      return this.$store.commit("setSubmitRequest", {
        fieldId: this.field.id,
        answer: this.answer,
        valid: this.inputRules(this.answer),
      });
    }
    return this.updateRequest();
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/main.scss";

input {
  @include text-input-properties;
}

.error-message {
  @include text-error-message;
}

@media screen and (max-width: 768px) {
  input {
    font-size: 3vw;
  }

  .error-message {
    font-size: 1.5vw;
  }
}

@media screen and (max-width: 480px) {
  input {
    font-size: 5vw;
  }

  .error-message {
    font-size: 3vw;
  }
}
</style>
