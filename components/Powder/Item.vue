<template>
    <div class="PowderItem">
        <div class="PowderItem__img">
            <NuxtImg :src="img" width="32" height="32"
                     :alt="text"/>
        </div>

        <p class="PowderItem__text">
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">

defineProps({
    img: String,
    text: String,
})

</script>

<style scoped lang="scss">
.PowderItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 150px;

    @media screen and (max-width: 767px) {
        max-width: 100%;
    }

    &__img {
        border-radius: 100%;
        background: $lightGreen;
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__text {
        text-align: center;
        color: $mainBlack;
        line-height: 20px;
    }
}
</style>