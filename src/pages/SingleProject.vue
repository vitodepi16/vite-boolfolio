<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
  </div>
  <div v-else>
    <LoaderApp />
  </div>
</template>

<script>
import axios from "axios";
import LoaderApp from "../components/LoaderApp.vue";
export default {
  name: "SingleProject",
  components: {
    LoaderApp,
  },
  data() {
    return {
      project: null,
      apiUrl: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    getProject() {
      axios
        .get(`${this.apiUrl}/projects/${this.$route.params.slug}`)
        .then((res) => {
          if (res.data.success) {
            this.project = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped></style>
