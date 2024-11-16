<template>
    <section class="tags" itemscope itemtype="http://schema.org/WebPage">
        <div class="tags__container">
            <h2 class="visually-hidden">Теги и ключевые слова</h2>
            <div class="tags__items" role="list" aria-label="Список тегов">
                <TagsItem 
                    v-for="(tag, index) in tags" 
                    :key="tag.name" 
                    :name="tag.name"
                    itemprop="keywords"
                    role="listitem"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ tags: { name: string }[] }>();
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

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
</style>