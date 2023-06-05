<script>
import AppCardDetail from './AppCardDetail.vue'

export default {
    name: "AppMain",
    components: {
        AppCardDetail,
    }

}
</script>

<template>
    <div class="container">
        <select>
            <option value="0">Alien</option>
        </select>

        <section class="cards">
            <AppCardDetail />




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

.cards {
    @include content-flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
    background-color: white;



    .card {
        width: calc(100% / 5);
        margin: 5px;
        height: 150px;
        background-color: #d48f38;
    }

}
</style>
