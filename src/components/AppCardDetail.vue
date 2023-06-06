<script>
export default {
    name: "AppCardDetail",
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="details.card_images[0].image_url_small" alt="immagine">

        <h5>{{ details.name }}</h5>
        <span v-if="details.archetype">{{ details.archetype }}</span>
        <span v-else>Non definito</span>


    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/partials/mixin.scss' as *;

.card {
    width: 168px;
    height: 350px;
    text-align: center;
    line-height: 25px;
    margin: 15px;
    background-color: #d48f38;


    h5 {
        text-transform: uppercase;
        color: white;
    }



}
</style>


