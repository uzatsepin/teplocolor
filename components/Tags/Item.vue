<template>
    <div class="TagItem">
        {{ name }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String
})
</script>

<style scoped lang="scss">
.TagItem {
    padding: 8px 16px;
    background: #FFF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: $mainBlack;
}
</style>