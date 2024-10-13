<template>
    <div class="pistol" ref="pistolElement">
        <NuxtImg src="/images/pistol.png" width="250" height="400" alt="Teplocolor main image color" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.pistol {
    & img {
        @media screen and (max-width: 767px) {
            height: 350px;
            width: auto;
        }
    }
}
</style>