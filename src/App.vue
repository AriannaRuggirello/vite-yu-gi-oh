<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      // chiamata axios
      axios.get(store.apiURL)
        // che cosa deve ritornare la chiamata
        .then(res => {
          // cards array vuoto 
          store.cards = res.data.results

        })
        // gestire eventuali errori
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/partials/variables.scss' as *;
@use './style/partials/mixin.scss' as *;
@use './style/general.scss' as *;
</style>
