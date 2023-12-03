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
            :field="field"
            :formAnswer="formAnswers[index]"
            @submitAnswer="submitAnswer"
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
import EmailField from "./formFields/EmailField.vue";
export default {
  name: "FormField",
  components: {
    TextField,
    CheckboxField,
    EmailField,
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
  },
  data() {
    return {
      isIncreasing: true,
      loading: false,
      formAnswers: [],
    };
  },
  watch: {
    activeField() {
      this.isIncreasing = this.activeField > this.previousField;
    },
  },
  methods: {
    async submitAnswer(answer) {
      const index = this.formAnswers.findIndex(
        (item) => item.fieldId == answer.fieldId
      );

      const body = {
        formId: this.apiData.id,
        fieldId: answer.fieldId,
        value: answer.answer,
      };

      if (index !== -1) {
        this.formAnswers[index] = answer;
        return await this.$axios
          .put(`/respondents/${body.formId}`, body)
          .then(() => {
            this.$emit("increment");
          });
      }

      this.formAnswers.push(answer);
      console.log(this.formAnswers);
      return await this.$axios.post(`/respondents`, body).then(() => {
        this.$emit("increment");
      });
    },
    getCheckboxId(index) {
      return "check6vwbox" + index;
    },
    getFieldComponent(fieldType) {
      switch (fieldType) {
        case "text":
          return TextField;
        case "email":
          return EmailField;
        case "checkbox":
          return CheckboxField;
        default:
          return TextField;
      }
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
