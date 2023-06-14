<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
  </div>
  <div v-else>
    <LoaderApp />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SingleProject',
  data() {
    return {
      project: null,
      apiUrl: 'http://127.0.0.1:8000/api',
    };
  },
  methods: {

    getProject() {
      axios.get(${this.apiUrl}/projects/${this.$route.params.slug}).then((res) => {
        if (res.data.success) {
          this.project = res.data.results;
        } else {
          this.$router.push({ name: 'not-found' })
        }
      })
    }
  },
  mounted() {
    this.getProject();
  }

}
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleProject",
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
            console.log(res.data);
            this.project = res.data.success;
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
@use "../assets/style/general.scss" as *;
</style> -->
