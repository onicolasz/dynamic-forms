<template>
  <div id="form" :style="{ gridTemplateAreas: gridTemplate }">
    <!-- Header Container -->
    <div
      class="header-container"
      style="grid-area: header; background-color: #00ff00; height: 2px"
    ></div>

    <!-- Main Content (Field Container) -->
    <div
      class="field-container"
      :style="{ gridArea: 'main-content', color: apiData.style.textColor }"
    >
      <div class="field-container-item">
        <div class="field-container-label">
          <p>{{ apiData.title }}</p>
        </div>
        <div class="field-container-description">
          <p>{{ apiData.fields[0].description }}</p>
        </div>
        <div class="field-container-input">
          <input v-model="answer" placeholder="Sua resposta..." />
        </div>
        <button
          class="field-container-button"
          :style="{ backgroundColor: apiData.style.buttonColor }"
        >
          Responder
        </button>
      </div>
    </div>

    <!-- Sidebar (Navbar Container) -->
    <div
      class="navbar-container"
      style="
        grid-area: sidebar;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      "
    >
      <span @click="decrement">&#x2191;</span>
      <span @click="increment">&#x2193;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      apiData: {
        style: {
          bgColor: "#263238",
          buttonColor: "#C0CA33",
          textColor: "#ffffff",
        },
        title: "Qual seu nome?",
        fields: [
          {
            id: "4c0aaa104dbeeb4d331a6344",
            type: "text",
            title: "Qual seu nome?",
            description: "Coloque seu nome completo",
          },
        ],
      },
      answer: "",
      gridTemplate: "'header header' 'main-content sidebar'", // Define the grid template areas
    };
  },
  methods: {
    decrement() {
      // Lógica para decrementar
    },
    increment() {
      // Lógica para incrementar
    },
  },
};
</script>

<style lang="scss" scoped>
#form {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
}

.header-container {
  grid-area: header;
}

.field-container {
  grid-area: main-content;
  font-size: 12px;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.field-container-input input {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 0;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  position: relative;
  width: 100%;
  font-size: 12px;

  ::placeholder {
    font-size: 8px;
    color: #ffffff;
  }
}

.field-container-button {
  padding: 6px 12px;
  display: inline;
  border: none;
  border-radius: 5px;
  box-shadow: 6px;
  font-size: 12px;
}

.navbar-container {
  grid-area: sidebar;
}
</style>
