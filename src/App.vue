<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSelect from './components/AppSelect.vue'


export default {
  components: {
    AppHeader,
    AppSelect,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      // parametrizzare la chiamata col select
      let myUrl = store.apiURL
      // se il select è diverso da vuoto
      // if (store.selectSearch !== "") {
      // myUrl +=  backtick ?${store.apiNameParameter}=${store.selectSearch} come js vanilla

      // }
      // chiamata axios
      axios.get(myUrl)
        // che cosa deve ritornare la chiamata
        .then(res => {
          // cards array vuoto 
          store.cards = res.data.data;

        })
        // gestire eventuali errori
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <AppHeader />
  <main class="container">
    <AppSelect />
    <AppMain />
  </main>
  <!-- // aggiungo l'evento creato in select @nome del click = getcards -->
</template>

<style lang="scss">
@use './style/partials/variables.scss' as *;
@use './style/partials/mixin.scss' as *;
@use './style/general.scss' as *;
</style>
