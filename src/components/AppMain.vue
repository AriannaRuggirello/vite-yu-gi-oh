<script>
import { store } from './../store.js';

import AppCardDetail from './AppCardDetail.vue'

export default {
    name: "AppMain",
    components: {
        AppCardDetail,
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <div class="container">
        <select>
            <option value="0">Alien</option>
        </select>

        <div class="banner">
            <span>Found 20 cards</span>
        </div>
        <section class="cards">

            <!-- andiamo a prendere ogni figurina nell'array partito vuoto ma con la chiamata axios si riempie -->
            <AppCardDetail v-for="figure in store.cards" :details="figure" />

        </section>


    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/partials/mixin.scss' as *;

select {
    width: 130px;
    margin-top: 30px;
    text-align: center;
}

.banner {
    color: white;
    font-weight: bold;
    background-color: #212529;
    padding: 20px;
    margin-top: 30px;
}

.cards {
    @include content-flex;
    justify-content: center;
    flex-wrap: wrap;

    background-color: white;



}
</style>
