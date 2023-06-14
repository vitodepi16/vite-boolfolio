import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Homepage.vue";
import Projectlist from "./pages/ProjectList.vue";
import SingleProject from "./pages/SingleProject.vue";
import Contactus from "./pages/Contactus.vue";
import Aboutus from "./pages/Aboutus.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projectlist,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contactus,
    },
    {
      path: "/about",
      name: "about",
      component: Aboutus,
    },
    {
      path: "/project/:slug",
      name: "single-project",
      component: SingleProject,
    },
    //facoltativa: pagina 404
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
