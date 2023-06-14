<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in menu">
              <router-link :to="{ name: link.routeName }" class="nav-link"
                >{{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
  data() {
    return {
      menu: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "project",
          routeName: "projects",
        },
        {
          label: "about",
          routeName: "about",
        },
        {
          label: "contact",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
