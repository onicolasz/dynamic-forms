<template>
  <div class="field-container items-center justify-center">
    <transition
      :name="isIncreasing ? 'field-transition' : 'field-transition-reverse'"
      mode="out-in"
    >
      <div
        class="field-container-item flex-grow max-w-md"
        v-for="(field, index) in apiData.fields"
        :key="field.id"
        v-if="activeField == index"
      >
        <p class="field-label">
          <div
            class="question-title w-full"
            :style="{ color: apiData.style.textColor }"
          >
            {{ field.title }}
          </div>
        </p>
        <div class="description-container">
          <small
            class="description w-full"
            :style="{ color: apiData.style.textColor }"
          >
            {{ field.description }}
        </small>
        </div>
        <div class="field-item">
          <div class="field-group">
            <input
              placeholder="Sua resposta..."
              class="field-text w-full text-xs"
            />
          </div>
        </div>
        <div class="field-container-btn w-full">
          <button
            :style="{ backgroundColor: apiData.style.buttonColor }"
          >
            <small>Responder</small>
          </button>
        </div>
      </div>
    </transition>
  </div>
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
    };
  },
  watch: {
    activeField() {
      this.isIncreasing = this.activeField > this.previousField;
    },
  },
};
</script>
<style>
input {
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 0;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  position: relative;

  ::placeholder {
    color: #ffffff;
  }
}

.field-container-btn button {
  padding: 2px 6px;
  margin-top: 8px;
  display: inline;
  border: none;
  border-radius: 2px;
  box-shadow: 6px;
  font-size: 70%;
}

.transition-class {
  transition: all 1s 1s;
}

.field-transition-enter-active {
  transition: opacity 1s, transform 0.3s;
}
.field-transition-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.field-transition-enter {
  opacity: 0;
  transform: translateY(20px);
}
.field-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.field-transition-reverse-enter-active {
  transition: opacity 1s, transform 0.3s;
}
.field-transition-reverse-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.field-transition-reverse-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.field-transition-reverse-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
