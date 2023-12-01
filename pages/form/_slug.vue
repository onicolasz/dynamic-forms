<template>
  <div id="form-container" :style="{ backgroundColor: apiData.style.bgColor }">
    <FormHeader
      class="w-full h-0.5"
      :activeField="activeField + 1"
      :maxFields="apiData.fields.length"
    ></FormHeader>

    <div class="flex min-h-screen">
      <div class="flex-grow">
        <FormField
          class="flex items-center h-full m-2"
          :apiData="apiData"
          :activeField="activeField"
          :previousField="previousField"
        ></FormField>
      </div>
      <div class="flex items-center justify-end">
        <FormNavbar @increment="increment" @decrement="decrement"></FormNavbar>
      </div>
    </div>
  </div>
</template>

<script>
import FormHeader from "../../components/form/FormHeader.vue";
import FormField from "../../components/form/FormField.vue";
import FormNavbar from "../../components/form/FormNavbar.vue";
export default {
  async asyncData({ $axios, params }) {
    console.log(params.slug);
    //const test = await $axios.get(`forms/1`).then((res) => res.data);
    const apiData = {
      createdAt: "2023-11-28T23:14:41.889Z",
      title: "Teste prático | Exemplo 1",
      style: {
        bgColor: "#263238",
        buttonColor: "#C0CA33",
        textColor: "#ffffff",
      },
      fields: [
        {
          id: "4c0aaa104dbeeb4d331a6344",
          type: "text",
          title: "Qual seu nome?",
          description: "Coloque seu nome completo",
        },
        {
          id: "3aaa00558565f516b8e9e2c4",
          type: "email",
          title: "Qual seu e-mail?",
          description: "",
        },
        {
          id: "ec81c352c85d45cf10610a15",
          type: "checkbox",
          title: "Qual sua fruta favorita?",
          description: "Escolha todas que gosta",
          options: [
            { id: "fbe6aa53660cd9ada717bfb8", value: "Maçã 🍎" },
            { id: "edcba72a3bde2dcc5d5f9ab9", value: "Laranja 🍊" },
            { id: "a37cfbe570a196c6af4c5b08", value: "Melancia 🍉" },
            { id: "2ee2ebdc39f7ad8ba9e4f54c", value: "Morango 🍓" },
            { id: "c6fcaacbdef28eb5b1364add", value: "Abacaxi 🍍" },
          ],
        },
        {
          id: "bd7c38b5a0e4f2cbd197cf7f",
          type: "endScreen",
          title: "Obrigado por participar!",
          description: "Sua opinião é muito importante pra gente",
        },
      ],
      id: "1",
    };

    return {
      apiData: apiData,
    };
  },
  name: "Form",
  components: {
    FormHeader,
    FormField,
    FormNavbar,
  },
  data() {
    return {
      answer: "",
      activeField: 0,
      previousField: 0,
    };
  },
  methods: {
    decrement() {
      if (this.activeField > 0) {
        this.previousField = this.activeField;
        this.activeField = this.activeField - 1;
      }
    },
    increment() {
      if (this.activeField < this.apiData.fields.length - 1) {
        this.previousField = this.activeField;
        this.activeField = this.activeField + 1;
      }
    },
  },
  async created() {
    await this.$store.commit("setFormColors", this.apiData);
  },
};
</script>

<style>
#form-container {
  overflow: hidden;
  height: 100vh;
}
</style>
