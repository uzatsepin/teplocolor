<template>
    <button class="ButtonContact">
        Оставить заявку
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ButtonContact {
    padding: 8px 16px;
    background: $darkGreen;
    border-radius: 16px;
    color: #FFF;
    transition: all 250ms ease-in-out;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 16px;
    leading-trim: both;
    text-edge: cap;

    &:before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("~/assets/images/icons/icon-spray.svg") no-repeat center;
        background-size: contain;
    }

    &:hover {
        background: $mainGreen;
    }
}
</style>