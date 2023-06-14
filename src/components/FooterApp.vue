<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <title>Footer</title>
    </head>
    <body>
      <main class="main-section"></main>

      <footer class="footer-sec">
        <div class="main">
          <div class="logo row">
            <div class="footer-header">
              <img src="image/logo-portfolio.jpeg" class="manik" alt="" />
            </div>
            <div class="logo-des">
              <p>
                Sono lieto di presentarvi la mia innovativa pagina per il
                caricamento dei portfolio, un'esperienza interattiva e intuitiva
                che mette in mostra il talento e la creatività di numerosi
                professionisti provenienti da diverse discipline. La pagina è
                stata progettata con cura per offrire una piattaforma
                accattivante e facile da navigare, in cui ogni portfolio viene
                presentato in modo impeccabile e personalizzato.
              </p>
            </div>
          </div>

          <div class="office row">
            <div class="footer-header">
              <h3>Office</h3>
            </div>
            <div class="office-des">
              <p>
                Ecco qui<br />
                Alcuni contatti<br />Per avere informazioni<br />Contattaci!
              </p>

              <a href="#">vitodepalma16@gmail.com</a>

              <p class="num">+91-9999999999</p>
            </div>
          </div>

          <div class="link row">
            <div class="footer-header">
              <h3>Links</h3>
            </div>

            <ul class="link-des list-unstyled">
              <li class="nav-item" v-for="(link, index) in menu">
                <router-link :to="{ name: link.routeName }" class="nav-link"
                  >{{ link.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="newsletter row">
            <div class="footer-header">
              <h3>Newsletter</h3>
            </div>
            <div class="newsletter-des">
              <div class="subcribe">
                <i class="sub-icon ri-mail-check-fill"></i>
                <input type="mail" placeholder="Enter Email ID" required />
                <i class="sub-icon ri-arrow-right-line"></i>
              </div>
              <div class="icons">
                <a href="#"><i class="social-icon ri-facebook-fill"></i></a>
                <a href="#"><i class="social-icon ri-instagram-line"></i></a>
                <a href="#"><i class="social-icon ri-linkedin-fill"></i></a>
                <a href="#"><i class="social-icon ri-github-line"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <hr />

          <p>© Copyright 2023 Vito De Palma.</p>
        </div>
      </footer>
    </body>
  </html>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

footer {
  color: #fff;
  background-image: linear-gradient(
    90deg,
    rgba(39, 27, 111, 1) 0%,
    rgba(87, 25, 45, 1) 100%
  );
  position: relative;
  width: 100%;
  height: 100%;
  top: 350px;
  border-top-left-radius: 70px;
  font-size: 0.8rem;
}

@media (max-width: 960px) {
  footer {
    width: 100%;
    top: 120px;
  }

  .main {
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  .logo {
    grid-column: 1/3;
  }

  .office {
    grid-column: 3/5;
  }
  .link {
    grid-column: 1/3;
  }
}

@media (max-width: 660px) {
  .main {
    gap: 10px;
    margin: 0;
  }

  .icons {
    display: flex;
  }

  .row {
    grid-column: 1/4;
  }
}

.manik {
  width: 120px;
}
.main {
  margin: 50px;
  padding-top: 20px;
  padding-bottom: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, 1fr);
}
.row {
  margin-top: 50px;
}
.footer-header {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.office-des {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.office a {
  text-decoration: none;
  color: #98a8f8;
}
.office a:hover {
  color: #fff;
}
.num {
  font-size: 1rem;
  font-weight: 500;
}

.link-des {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.link-des a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.link-des a:hover {
  color: #fb2576;
  transition: linear 0.3s;
}

.btn-know {
  text-decoration: none;
  background-color: #fff;
  padding: 10px;
  position: relative;
  top: 30px;
  background-color: transparent;
  border: 1px solid #98a8f8;
  color: #98a8f8;
  text-transform: uppercase;
  border-radius: 10px;
}

.btn-know:hover {
  color: white;
  background-color: #98a8f8;
  transition: linear 0.3s;
}
.subcribe {
  display: flex;
}
input[type="mail"] {
  border: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  font-size: 0.8rem;
}
.sub-icon {
  margin: 7px;
  margin-right: 15px;
  margin-left: 0;
  font-size: 1.5rem;
}
.ri-arrow-right-line {
  margin-left: 0;
}

.icons a {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  align-items: center;
  font-size: 1.1rem;
  margin: 2%;
}

.social-icon {
  position: relative;
  top: 2px;
}
.icons a:hover {
  color: #fff;
  background-color: #fb2576;
  border-color: #fb2576;
}
.newsletter-des {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.copyright {
  text-align: center;
}

hr {
  width: 90%;
  margin: 2px auto;
  opacity: 40%;
  border: 0.01px solid white;
}

.copyright p {
  padding: 20px;
}
</style>
