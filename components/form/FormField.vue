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
          <input v-if="field.type == 'text'" placeholder="Sua resposta..." class="field-text" :rules="textRules" />
          <input v-if="field.type == 'email'" placeholder="exemplo@exemplo.com" class="field-text-email"
            :rules="emailRules" />
          <fieldset v-if="field.type == 'checkbox'">
            <legend class="legend-text mb-2" :style="{ color: apiData.style.textColor, opacity: 0.7 }">
              <svg data-v-2c277c32="" data-prefix="fas" data-icon="list" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512" class="svg-inline--fa fa-list fa-w-18">
                <path fill="currentColor"
                  d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                  class=""></path>
              </svg>
              Selecione quantos itens desejar.
            </legend>

            <div v-for="(option, index) in field.options" :key="option.id" class="checkbox-container"
              :style="{ color: apiData.style.textColor }">
              <span class="checkbox-marker">{{ String.fromCharCode(65 + index) }}</span>
              <label :for="getCheckboxId(index)" class="checkbox-label">
                <span class="checkbox-text">{{ option.value }}</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="field-container-btn">
        <button :style="{ backgroundColor: apiData.style.buttonColor }" @click="submitAnswer">
          <small v-if="!loading">
            <svg v-if="field.type == 'checkbox'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"
              data-v-6089a9b6="">
              <path fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                class=""></path>
            </svg>
            {{ field.type == 'checkbox' ? 'Enviar respostas' : 'Responder' }}
          </small>
          <div v-else class="loading-indicator"></div>
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "FormField",
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
    }
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
