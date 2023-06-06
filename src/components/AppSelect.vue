<script>
import { store } from './../store.js';
import axios from 'axios';


export default {
    name: "AppSelect",
    data() {
        return {
            store,
        }
    },
    methods: {
        getOption() {


            // chiamata axios
            axios.get(store.apiUrlArchetypes)
                // che cosa deve ritornare la chiamata
                .then(res => {
                    // cards array vuoto 
                    store.archetypesArr = res.data;

                })
                // gestire eventuali errori
                .catch(err => {
                    console.log(err);
                })
        }
    },
    created() {
        this.getOption();
    }

}
</script>

<template>
    <!-- inserisco trim per eliminare gli spazi e il v model per agganciarlo allo store v-model.trim="store.selectSearch"-->
    <select>
        <option v-for="option in store.archetypesArr">{{ option.archetype_name }}</option>


    </select>
    <!-- creare il button aggiungendo @click.prevent con il $emit -->
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/partials/mixin.scss' as *;

select {
    width: 130px;
    margin-top: 30px;
    text-align: center;
}
</style>
