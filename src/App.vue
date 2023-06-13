<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="card">
          <div class="card-img-top">
            <img class="img-fluid" :src="project.image" alt="" srcset="" />
          </div>
          <div class="card-title">
            <h2 class="fs-1">{{ project.title }}</h2>
          </div>
          <div class="card-body">
            {{ project.body }}
          </div>
        </div>
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

<style lang="scss" scoped>
@use "./assets/style/general.scss" as *;
</style>
