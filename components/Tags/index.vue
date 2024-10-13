<template>
    <section class="tags">
        <div class="tags__container">
            <div class="tags__items">
                <TagsItem v-for="tag in tags" :key="tag.name" :name="tag.name" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tags = [
    {
        name: "Покраска"
    },
    {
        name: 'teplogarden'
    },
    {
        name: 'теплицы'
    },
    {
        name: 'заказать покраску'
    },
    {
        name: 'покрасить теплицу'
    },
    {
        name: 'Купить теплицу'
    },
    {
        name: "покрасочная"
    },
    {
        name: "покрасить"
    },
    {
        name: "порошковая покраска"
    },
    {
        name: "покраска"
    },
    {
        name: "защита от коррозии"
    },
    {
        name: "покраска для теплиц"
    },
    {
        name: "профессиональная покраска"
    }
]
</script>

<style scoped lang="scss">
.tags {
    margin-top: 46px;

    &__container {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
    }

    &__items {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
}
</style>