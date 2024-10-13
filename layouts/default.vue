<template>
    <div class="container">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1356px;
    margin: 0 auto;
}

</style>