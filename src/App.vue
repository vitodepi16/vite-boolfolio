<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex p-3 mt-4"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="card" style="width: 18rem">
          <img class="img-fluid" :src="project.image" alt="" srcset="" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.body }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Progetto creato usando: <strong> {{ project.type.name }}</strong>
            </li>
            <li class="list-group-item">Creato il: {{ project.created_at }}</li>
          </ul>
          <div class="card-body d-flex">
            <form action="{{ project.slug }}" method="POST">
              <a class="btn-outline-primary btn mx-auto" href=""
                ><i class="fa-solid fa-eye"></i
              ></a>
              <button
                type="submit"
                class="mx-auto delete-button btn btn-outline-danger"
                data-item-title="{{ $project.title }}"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </form>
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
