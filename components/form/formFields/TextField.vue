<template>
  <div class="field-input-container">
    <input
      placeholder="Sua resposta..."
      class="field-text"
      v-model="answer"
      :style="{
        color: textColor,
        borderBottom: '0.5px solid ' + textColor,
      }"
    />
    <div class="error-message" v-if="!valid">Essa resposta é obrigatória.</div>
    <SubmitButton
      text="Responder"
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
  },
  data() {
    return {
      isIncreasing: true,
      loading: false,
      valid: true,
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
  },
  methods: {
    submitAnswer() {
      if (this.answer !== null && this.answer.trim() !== "") {
        this.loading = true;
        return this.$emit("submitAnswer", {
          fieldId: this.field.id,
          answer: this.answer,
        });
      }

      this.valid = false;
    },
  },
  mounted() {
    if (this.formAnswer.answer) {
      this.answer = this.formAnswer.answer;
    }
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
  font-size: 1.5vw;

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
