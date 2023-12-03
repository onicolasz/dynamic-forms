<template>
  <div
    id="form-container"
    :style="{
      gridTemplateAreas: gridTemplate,
      backgroundColor: apiData.style.bgColor,
    }"
  >
    <div class="header-container">
      <FormHeader
        :activeField="activeField + 1"
        :maxFields="apiData.fields.length"
        v-if="!lastIndex"
      ></FormHeader>
    </div>

    <div class="field-container">
      <FormField
        :apiData="apiData"
        :activeField="activeField"
        :previousField="previousField"
        :lastIndex="lastIndex"
        :formAnswers="formAnswers"
        :valid="valid"
        :loading="loading"
        @decrement="decrement"
        @submitAnswer="submitAnswer"
        @updateValid="updateValid"
      ></FormField>
    </div>
    <div class="nav-container">
      <FormNavbar
        @decrement="decrement"
        @submitAnswer="submitAnswer"
        @updateValid="updateValid"
        :valid="valid"
        v-if="!lastIndex"
      ></FormNavbar>
    </div>
  </div>
</template>

<script>
import FormHeader from "../../components/form/FormHeader.vue";
import FormField from "../../components/form/FormField.vue";
import FormNavbar from "../../components/form/FormNavbar.vue";
export default {
  async asyncData({ $axios, params }) {
    const formData = await $axios
      .get(`forms/${params.slug}`)
      .then((res) => res.data);

    return {
      apiData: formData,
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
      gridTemplate: "'header header' 'main-content navbar'",
      formAnswers: [],
      valid: true,
      loading: false,
    };
  },
  computed: {
    lastIndex() {
      return this.activeField == this.apiData.fields.length;
    },
  },
  methods: {
    decrement() {
      if (this.activeField > 0) {
        this.previousField = this.activeField;
        this.activeField = this.activeField - 1;
      }
    },
    increment() {
      if (this.activeField < this.apiData.fields.length) {
        this.previousField = this.activeField;
        this.activeField = this.activeField + 1;
      }
    },
    async submitAnswer(answer) {
      this.loading = true;
      const index = this.formAnswers.findIndex(
        (item) => item.fieldId == answer.fieldId
      );

      console.log(index);

      const body = {
        formId: this.apiData.id,
        fieldId: answer.fieldId,
        value: answer.answer,
      };

      if (index !== -1) {
        this.formAnswers = this.formAnswers.map((item) =>
          item.fieldId === answer.fieldId ? answer : item
        );
        await this.$axios
          .put(
            `https://jsonplaceholder.typicode.com/posts/${body.formId}`,
            body
          )
          .then(() => {
            this.loading = false;
            this.increment();
          });
        return this.$store.commit("setSubmitRequest", null);
      }

      this.formAnswers.push(answer);
      await this.$axios
        .post("https://jsonplaceholder.typicode.com/posts", body)
        .then(() => {
          this.loading = false;
          this.increment();
        });
      return this.$store.commit("setSubmitRequest", null);
    },
    updateValid(value) {
      this.valid = value;
    },
  },
  async created() {
    await this.$store.commit("setFormColors", this.apiData);
  },
};
</script>

<style lang="scss" scoped>
#form-container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
}

.header-container {
  grid-area: header;
  height: 4px;
  margin-bottom: 24px;
}

.field-container {
  padding: 8px;
  grid-area: main-content;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-container {
  grid-area: navbar;
  height: 100%;
}
</style>
