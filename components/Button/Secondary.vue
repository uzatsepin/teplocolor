<template>
    <button class="ButtonSecondary">
        Узнать цену
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ButtonSecondary {
    padding: 9px 16px;
    background: $mainGray;
    border: 1px solid $mainGreen;
    border-radius: 16px;
    color: $mainGreen;
    transition: all 250ms ease-in-out;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 16px;

    &:before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("~/assets/images/icons/hot-price.svg") no-repeat center;
        background-size: contain;
    }

    &:hover {
        cursor: pointer;
        background: $lightGreen;
    }
}
</style>