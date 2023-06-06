<script>
export default {
    name: "AppSelect",

}
</script>

<template>
    <select>
        <option value="0">Alien</option>
        <option value="1">Noble Knight</option>
        <option value="2">Melodious</option>
        <option value="3">Archfiend</option>

    </select>
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
