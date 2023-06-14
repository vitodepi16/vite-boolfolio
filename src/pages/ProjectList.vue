<template>
  <div v-if="projects == 0">
    <LoaderApp />
  </div>
  <div v-else>
    <div class="container">
      <h1 class="text-white text-center mt-3">
        {{ title }}
      </h1>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex p-3"
          v-for="(project, index) in projects"
          :key="project.id"
        >
          <div class="card bg-dark text-white p-4 mt-5">
            <img class="img-fluid" :src="project.image" alt="" srcset="" />
            <div class="card-body">
              <h5 class="card-title text-capitalize">{{ project.title }}</h5>
              <p class="card-text fs-6 mt-2">{{ project.body }}</p>
            </div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-dark text-white">
                Progetto creato usando:
                <strong> {{ project.type.name }}</strong>
              </li>
              <li class="list-group-item bg-dark text-white">
                Creato il: {{ project.created_at }}
              </li>
            </ul>
            <div v-for="tag in project.tags" class="mt-2">
              <p class="badge rounded-pill text-bg-success">
                {{ tag.name }}
              </p>
            </div>
            <div class="card-body d-flex">
              <form action="{{ project.slug }}" method="POST">
                <router-link
                  :to="{
                    name: 'single-project',
                    params: { slug: project.slug },
                  }"
                  ><i
                    class="btn-outline-primary btn mx-auto fa-solid fa-eye"
                  ></i
                ></router-link>
                <button
                  type="submit"
                  class="ms-5 delete-button btn btn-outline-danger"
                  data-item-title="{{ $project.title }}"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              :class="{ 'page-link': true, disabled: currentPage === 1 }"
              @click="getData(currentPage - 1)"
            >
              Previous
            </button>
          </li>
          <li class="page-item" v-for="n in lastPage">
            <button
              :class="{ 'page-link': true, active: currentPage === n }"
              @click="getData(n)"
            >
              {{ n }}
            </button>
          </li>

          <li class="page-item">
            <button
              :class="{ 'page-link': true, disabled: currentPage === 2 }"
              @click="getData(currentPage + 1)"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderApp from "../components/LoaderApp.vue";
export default {
  name: "ProjectList",
  components: {
    LoaderApp,
  },
  data() {
    return {
      title: "I miei progetti",
      projects: [],
      apiUrl: "http://127.0.0.1:8000/api",
      currentPage: 1,
      lastPage: null,
    };
  },
  methods: {
    getData(numPage) {
      axios
        .get(`${this.apiUrl}/projects`, {
          params: {
            page: numPage,
          },
        })
        .then((res) => {
          this.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/variables.scss" as *;
.page-link {
  background-color: $my-primary;
}
.page-item {
  border-color: $my-primary;
}
</style>
