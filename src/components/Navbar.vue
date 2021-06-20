<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">Home</router-link>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link to="/services">Services </router-link>
          </a>
  
          
          
          
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <router-link to="/services#web-applications">Web Applications </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/services#mobile-applications">Mobile Applications </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/services#digital-marketing">Digital Marketing </router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              <router-link to="/services#artificial-intelligence">Artificial Intelligence </router-link>
            </a>
          </div>
        </div>

        <a class="navbar-item">
          <router-link to="/customers">Customers </router-link>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link to="/blog">Blog </router-link>
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              <router-link to="/blog#articles">Articles </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/blog#events">Events </router-link>
            </a>
          </div>
        </div>

        <a class="navbar-item">
          <router-link to="/support">Support </router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/contact-us">Contact Us </router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/about">About</router-link>
        </a>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
};
</script>
