<template>
    <button class="ButtonPrimary">
        Получить консультацию
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.ButtonPrimary {
    padding: 10px 16px;
    background: $lightGreen;
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
        background: url("~/assets/images/icons/phone-icon-hover.svg") no-repeat center;
        background-size: contain;
    }

    &:hover {
        cursor: pointer;
        background: #cde8d7;
    }
}

</style>