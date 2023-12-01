<template>
  <div class="field-container-checkbox">
    <fieldset>
      <legend
        class="legend-text mb-2"
        :style="{ color: textColor, opacity: 0.7 }"
      >
        <svg
          data-v-2c277c32=""
          data-prefix="fas"
          data-icon="list"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-list fa-w-18"
        >
          <path
            fill="currentColor"
            d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
            class=""
          ></path>
        </svg>
        Selecione quantos itens desejar.
      </legend>

      <div
        v-for="(option, index) in field.options"
        :key="option.id"
        class="checkbox-container"
        :style="{ color: apiData.style.textColor }"
      >
        <span class="checkbox-marker">{{
          String.fromCharCode(65 + index)
        }}</span>
        <label :for="getCheckboxId(index)" class="checkbox-label">
          <span class="checkbox-text">{{ option.value }}</span>
        </label>
      </div>
    </fieldset>
    <div class="field-container-btn">
      <button
        :style="{ backgroundColor: apiData.style.buttonColor }"
        @click="submitAnswer"
      >
        <small v-if="!loading">
          {{ field.type == "checkbox" ? "Enviar respostas" : "Responder" }}
        </small>
        <div v-else class="loading-indicator"></div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormField",
  props: {
    field: {
      default: 0,
    },
    data() {
      return {
        isIncreasing: true,
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
      submitAnswer() {
        this.loading = true;
      },
      getCheckboxId(index) {
        return "checkbox" + index;
      },
    },
  },
};
</script>
<style lang="scss">
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}

.legend-text {
  font-size: 6px;
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
