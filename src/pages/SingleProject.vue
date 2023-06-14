<template>
  <div class="container">
    <div v-if="project" class="bg-dark text-white p-4 mt-5">
      <h1 class="text-center text-uppercase">{{ project.title }}</h1>
      <div class="">
        <img class="img-fluid" :src="project.image" alt="" srcset="" />
      </div>

      <p class="p-3">{{ project.body }}</p>
      <p class="">
        Tecnologia utilizzata in questo progetto: {{ project.type.name }}
      </p>
      <span
        class="badge rounded-pill bg-danger mx-1"
        v-for="tag in project.tags"
        >{{ tag.name }}</span
      >
    </div>
    <div v-else>
      <LoaderApp />
    </div>
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
