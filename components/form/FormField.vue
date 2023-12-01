<template>
  <transition :name="isIncreasing ? 'field-transition' : 'field-transition-reverse'" mode="out-in">
    <div class="field-container-item w-full max-w-lg" v-for="(field, index) in apiData.fields" :key="field.id"
      v-if="activeField == index">
      <p class="field-label">
      <div class="question-title mb-2" :style="{ color: apiData.style.textColor }">
        {{ field.title }}
      </div>
      </p>
      <div class="description-container mb-3">
        <p class="description" :style="{ color: apiData.style.textColor }">{{ field.description }}</p>
      </div>
      <div class="field-item">
        <div class="field-group">
          <component :is="getFieldComponent(field.type)" :field="field"/>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import TextField from './formFields/TextField.vue';
import CheckboxField from './formFields/CheckboxField.vue';
export default {
  name: "FormField",
  components: {
    TextField,
    CheckboxField
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
  watch: {
    activeField() {
      this.isIncreasing = this.activeField > this.previousField;
    },
  },
  methods: {
    submitAnswer() {
      this.loading = true
    },
    getCheckboxId(index) {
      return 'checkbox' + index;
    },
    getFieldComponent(fieldType) {
      switch (fieldType) {
        case 'text':
          return TextField;
        case 'checkbox':
          return CheckboxField;
        default:
          return TextField;
      }
    },
  }
};
</script>
<style lang="scss">
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
    color: #ffffff07;
  }
}

.description {
  font-size: 65%;
}

.field-container-btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: fit-content;
  padding: 2px 4px 2px 4px;
  margin-top: 8px;
  display: inline;
  border: none;
  border-radius: 2px;
  box-shadow: 6px;
  font-size: 85%;
  text-align: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
}

.legend-text {
  font-size: 6px;
}

.transition-class {
  transition: all 1s 1s;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.5px solid #ffffff;
  border-radius: 2px;
  padding: 2px;
  padding-left: 4px;
  margin-bottom: 4px;
}

.checkbox-marker {
  align-items: center;
  text-align: center;
  font-size: 60%;
  width: 10px;
  height: 10px;
  background-color: #ffffff18;
  border-radius: 1px;
  cursor: pointer;
  margin-right: 5px;
}

.checkbox-text {
  display: flex;
  align-items: center;
  font-size: 90%;
  cursor: pointer;
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

.loading-indicator {
  border: 1px solid #ffffff;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  animation: spin 1s linear infinite;
  margin: auto;
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
  .question-title {
    font-size: 38px;
  }

  .description {
    font-size: 38px;
  }

  .field-container-btn button {
    font-size: 12px;
  }

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
  .question-title {
    font-size: 22px;
  }

  .description {
    font-size: 14px;
  }

  .field-container-btn button {
    font-size: 14px;
  }

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
}</style>
