<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
    <div class="row">
      <div class="col" v-for="(project, index) in projects" :key="project.id">
        {{ project.title }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      title: "Le mie API",
      projects: [],
      apiUrl: "http://127.0.0.1:8001/api",
    };
  },
  methods: {
    getData() {
      axios.get(`${this.apiUrl}/projects`).then((res) => {
        this.projects = res.data.results.data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
