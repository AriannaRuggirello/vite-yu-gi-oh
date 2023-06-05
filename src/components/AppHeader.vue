<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <nav>
        <img src="/public/ygoprodeck_logo.png" alt="">
        <span>Yu-Gi-Oh Api</span>
    </nav>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
@use '../style/partials/mixin.scss' as *;

nav {
    @include content-flex;
    background-color: white;
    padding: 20px 0;

    span {
        font-size: x-large;
        padding-left: 10px;
    }
}
</style>
