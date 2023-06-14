<template>
  <div class="container">
    <div v-if="project" class="bg-dark text-white p-4 mt-5">
      <h1 class="text-center text-uppercase">{{ project.title }}</h1>
      <div class="">
        <img class="img-fluid" :src="project.image" alt="" srcset="" />
      </div>

      <p class="p-3">{{ project.body }}</p>
      <div class="d-flex justify-content-between">
        <p class="w-100">
          Tecnologia utilizzata in questo progetto:
          <strong> {{ project.type.name }}</strong>
        </p>
        <div class="img-box">
          <img
            :src="getImageUrl(project.type.image)"
            class="imag-fluid"
            alt="ciao"
          />
        </div>
      </div>
      <div class="category">
        <span
          class="badge rounded-pill text-bg-info mx-1"
          v-for="tag in project.tags"
          >{{ tag.name }}</span
        >
      </div>
      <div class="d-grid gap-2 d-md-block">
        <a class="btn btn-outline-primary btn-lg mx-auto mt-3"
          >Torna ai tuoi progetti</a
        >
      </div>
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
    getImageUrl(imageFile) {
      console.log(`../../image/${imageFile}`);
      return new URL("../../image/" + imageFile, import.meta.url).href;
    },
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

<style lang="scss" scoped>
.img-box {
  width: 100px;
  img {
    width: 100%;
  }
}
</style>
