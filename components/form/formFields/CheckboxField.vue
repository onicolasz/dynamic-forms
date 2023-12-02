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
        @click="selectOption(option)"
        :class="{
          active: option.isActive,
        }"
        :style="{ color: textColor }"
      >
        <span class="checkbox-marker">{{
          String.fromCharCode(65 + index)
        }}</span>
        <label class="checkbox-label">
          <span class="checkbox-text">{{ option.value }}</span>
        </label>
      </div>
    </fieldset>
    <SubmitButton
      text="Enviar respostas"
      prefix="check"
      @submit="submitAnswer"
    />
  </div>
</template>
<script>
import SubmitButton from "./SubmitButton.vue";
export default {
  name: "FormField",
  components: {
    SubmitButton,
  },
  props: {
    field: {
      default: 0,
    },
  },
  data() {
    return {
      isIncreasing: true,
      loading: false,
      selected: [],
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
    selectOption(option) {
      if (option.isActive) {
        this.$set(option, "isActive", false);
        const index = this.selected.findIndex((item) => (item.id = option.id));
        return this.selected.slice(index, 1);
      }
      this.$set(option, "isActive", true);
      return this.selected.push(option);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/main.scss";

.field-container-btn button {
  @include button-properties;
}

.legend-text {
  font-size: 1vw;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 6px;
  cursor: pointer;
}

.checkbox-container:hover {
  background-color: #ffffff18;
  .checkbox-marker {
    border: 0.5px solid #ffffff;
  }
}

.checkbox-container.active {
  background-color: #ffffff18;
  font-weight: bold;
  .checkbox-marker {
    background-color: #ffffff;
    color: gray;
  }
}

.checkbox-marker {
  align-items: center;
  text-align: center;
  font-size: 1vw;
  width: 1.5vw;
  height: 1.5vw;
  background-color: #ffffff18;
  border-radius: 4px;
  margin-right: 5px;
}

.checkbox-text {
  display: flex;
  align-items: center;
  font-size: 90%;
}

@media screen and (max-width: 768px) {
  .legend-text {
    font-size: 3vw;
  }

  .checkbox-marker {
    width: 4vw;
    height: 4vw;
    font-size: 3vw;
  }

  .checkbox-text {
    font-size: 4vw;
  }

  .field-container-btn button {
    font-size: 4vw;
  }
}

@media screen and (max-width: 480px) {
  .legend-text {
    font-size: 3vw;
  }

  .checkbox-marker {
    width: 4vw;
    height: 4vw;
    font-size: 3vw;
  }

  .checkbox-text {
    font-size: 4vw;
  }

  .field-container-btn button {
    font-size: 4vw;
  }
}
</style>
