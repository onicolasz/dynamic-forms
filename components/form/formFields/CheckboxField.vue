<template>
  <div class="field-container-checkbox">
    <fieldset>
      <legend
        class="legend-text mb-2"
        :style="{ color: textColor, opacity: 0.7 }"
      >
        <font-awesome-icon
          :icon="['fas', 'list']"
          style="width: 1vw; height: 1vw"
        ></font-awesome-icon>
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
    <div class="error-message" v-if="!valid">Essa resposta é obrigatória.</div>
    <SubmitButton
      text="Enviar respostas"
      prefix="check"
      :loading="loading"
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
    formAnswer: {
      default: Object,
    },
    valid: {
      default: false,
    },
    loading: {
      default: false,
    },
  },
  data() {
    return {
      isIncreasing: true,
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
      if (this.selected.length > 0) {
        this.loading = true;
        return this.$emit("submitAnswer", {
          fieldId: this.field.id,
          answer: this.selected,
        });
      }

      this.valid = false;
    },
    selectOption(option) {
      if (option.isActive) {
        this.$set(option, "isActive", false);
        const index = this.selected.findIndex((item) => (item.id = option.id));
        this.selected.slice(index, 1);
        return this.$store.commit("setSubmitRequest", {
          fieldId: this.field.id,
          answer: this.selected,
          valid: this.selected.length > 0,
        });
      }
      this.$set(option, "isActive", true);
      this.selected.push(option);
      return this.$store.commit("setSubmitRequest", {
        fieldId: this.field.id,
        answer: this.selected,
        valid: this.selected.length > 0,
      });
    },
  },
  mounted() {
    if (this.formAnswer.answer) {
      this.formAnswer.answer.map((item) => {
        this.selected.push(item);
      });

      this.$store.commit("setSubmitRequest", {
        fieldId: this.field.id,
        answer: this.selected,
        valid: this.selected.length > 0,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/main.scss";

.error-message {
  color: $color-error;
  font-size: 0.9vw;
}

legend {
  font-size: 0.9vw;
  margin-bottom: 8px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 8px;
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
  font-size: 1.4vw;
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

  .error-message {
    font-size: 1.5vw;
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

  .error-message {
    font-size: 3vw;
  }
}
</style>
