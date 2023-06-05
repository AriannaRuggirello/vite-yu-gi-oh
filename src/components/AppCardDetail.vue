<script>
export default {
    name: "AppCardDetail"
}
</script>

<template>
    <div class="card">
        <img src="" alt="immagine">
        <h3>nome</h3>
        <h5>tipologia</h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/partials/mixin.scss' as *;

.card {
    width: calc(100% / 5);
    margin: 5px;
    height: 150px;
    background-color: #d48f38;
}
</style>
