<template>
  <header>
    <nav class="navbar mynav navbar-expand-lg">
      <div class="container-fluid">
        <div class="zone-logo">
          <a class="navbar-brand text-white" href="/"
            ><img
              src="image/logo-portfolio.jpeg"
              class="rounded p-2 mt-2 float-start img-fluid"
              alt=""
          /></a>
        </div>

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
        <a href="/" class="btn btn-outline-primary" type="button"
          >Vai al login</a
        >
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

<style lang="scss" scoped>
@use "../assets/partials/variables.scss" as *;
.mynav {
  background-color: $my-navbar;
  .nav-link {
    color: white;
    text-transform: capitalize;
    &:hover {
      color: #fb2576;
    }
  }
  .btn-outline-primary {
    border-color: $my-navbar;
    color: white;
    &:hover {
      background-color: $my-navbar;
      color: #fb2576;
    }
  }
}
.zone-logo {
  width: 150px;
}
</style>
