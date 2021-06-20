<template>
  <section class="hero">
    <Navbar />
    <div class="hero-body">
    <router-view> </router-view>

      <b-loading
        :is-full-page="isFullPage"
        v-model="isLoading"
        :can-cancel="true"
      ></b-loading>

    </div>
    <Footer />
  </section>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import Vuelidate from 'vuelidate'


Vue.use(Buefy, Vuelidate);

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  data() {
    return {
      followers: 1,
      user: {
        username: 'hafiz',
        firstName: 'hafizur',
        lastName: 'Rahman',
        email: 'h@gmail.com',
        isAdmin: true,
      },
      isLoading: false,
      isFullPage: true,
    };
  },
  components: {
    Navbar,

    Footer,
  },
  methods: {
    openLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  beforeMount() {
    this.openLoading();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hero-body {
  padding: 0px;
}

.first-block {
  height: 20vh;
  font-weight: bold;
  font-size: 2vw;
  text-align: center;
  padding: 50px 0;
  background-color: lightblue;
}

.second-block {
  height: 20vh;
  font-weight: bold;
  font-size: 2vw;
  text-align: center;
  padding: 50px 0;
  background-color: lightgray;
}
</style>
