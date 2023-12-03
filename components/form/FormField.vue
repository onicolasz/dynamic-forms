<template>
  <transition
    :name="isIncreasing ? 'field-transition' : 'field-transition-reverse'"
    mode="out-in"
  >
    <div
      class="field-container-item"
      v-for="(field, index) in apiData.fields"
      :key="field.id"
      v-if="activeField == index"
    >
      <div class="question-title" :style="{ color: apiData.style.textColor }">
        {{ field.title }}
      </div>
      <div class="description-container">
        <p class="description" :style="{ color: apiData.style.textColor }">
          {{ field.description }}
        </p>
      </div>
      <div class="field-item">
        <div class="field-group">
          <component
            :is="getFieldComponent(field.type)"
            :presets="getFieldPresets(field.type)"
            :field="field"
            :formAnswer="formAnswers[index]"
            :valid="valid"
            :loading="loading"
            @submitAnswer="submitAnswer"
            @updateValid="updateValid"
          />
        </div>
      </div>
    </div>
    <div
      class="thank-you-item"
      :style="{ color: apiData.style.textColor }"
      v-if="lastIndex"
    >
      <font-awesome-icon
        :icon="['fas', 'paper-plane']"
        class="thank-you-icon"
      ></font-awesome-icon>
      <p class="thank-you-title">Obrigado por participar!</p>
      <p class="thank-you-description">
        Sua opinião é muito importante pra gente.
      </p>
    </div>
  </transition>
</template>
<script>
import TextField from "./formFields/TextField.vue";
import CheckboxField from "./formFields/CheckboxField.vue";
export default {
  name: "FormField",
  components: {
    TextField,
    CheckboxField,
  },
  props: {
    apiData: {
      default: null,
    },
    activeField: {
      default: 0,
    },
    previousField: {
      default: 0,
    },
    lastIndex: {
      default: 0,
    },
    formAnswers: {
      default: null,
    },
    valid: {
      default: true,
    },
    loading: {
      default: false,
    },
  },
  data() {
    return {
      isIncreasing: true,
      presets: {
        rules: null,
        buttonText: null,
        buttonPrefix: null,
      },
    };
  },
  watch: {
    activeField() {
      this.isIncreasing = this.activeField > this.previousField;
    },
  },
  methods: {
    async submitAnswer(answer) {
      await this.$emit("submitAnswer", answer);
    },
    getFieldComponent(fieldType) {
      switch (fieldType) {
        case "text":
          return TextField;
        case "email":
          return TextField;
        case "checkbox":
          return CheckboxField;
        case "endScreen":
          return TextField;
        default:
          return TextField;
      }
    },
    getFieldPresets(fieldType) {
      switch (fieldType) {
        case "text":
          return {
            rules: "text",
            buttonText: "Responder",
          };
        case "email":
          return {
            rules: "email",
            buttonText: "Responder",
          };
        case "endScreen":
          return {
            buttonText: "Responder",
          };
        case "checkbox":
          return {
            buttonText: "Enviar respostas",
            buttonPrefix: "check",
          };
        default:
          return {};
      }
    },
    updateValid(value) {
      return this.$emit("updateValid", value);
    },
  },
};
</script>
<style lang="scss">
.field-container-item {
  width: 55%;
}

.thank-you-item {
  text-align: center;
}

.thank-you-title {
  font-size: 1.6vw;
  margin-bottom: 1vw;
}

.thank-you-description {
  font-size: 1.2vw;
  margin-bottom: 1vw;
}

.thank-you-icon {
  font-size: 4.5vw;
  margin-bottom: 3vw;
}

.question-title {
  font-size: 1.6vw;
  margin-bottom: 1vw;
}

.description {
  font-size: 1vw;
  margin-bottom: 1.5vw;
}

.transition-class {
  transition: all 1s 1s;
}

@mixin transitionEnter() {
  transition: opacity 1s, transform 0.3s;
}

@mixin transitionLeave() {
  transition: opacity 0.3s, transform 0.3s;
}

.field-transition-enter-active,
.field-transition-reverse-enter-active {
  @include transitionEnter();
}

.field-transition-leave-active,
.field-transition-reverse-leave-active {
  @include transitionLeave();
}

.field-transition-enter {
  opacity: 0;
  transform: translateY(20px);
}

.field-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.field-transition-reverse-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.field-transition-reverse-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media screen and (max-width: 768px) {
  .question-title {
    font-size: 3vw;
  }

  .description {
    font-size: 2vw;
    margin-bottom: 2.5vw;
  }

  .field-container-item {
    width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .question-title {
    font-size: 6vw;
  }

  .description {
    font-size: 3.5vw;
    margin-bottom: 4.5vw;
  }

  .field-container-item {
    width: 90%;
  }
}
</style>
