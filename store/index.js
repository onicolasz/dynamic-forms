export const mutations = {
    setFormColors(state, data) {
      state.bgColor = data.style.bgColor;
      state.buttonColor = data.style.buttonColor;
      state.textColor = data.style.textColor;
    },
  };