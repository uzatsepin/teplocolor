<template>
    <div class="ReviewItem">
        <div class="ReviewItem__rating">
            <div class="ReviewItem__rating-star fill" v-for="i in 5" :key="i"></div>
        </div>
        <div class="ReviewItem__text">
            Отличное качество услуг! Заказывали лазерную резку и гибку металла – все было выполнено точно в срок. Результатом довольны, будем обращаться снова.
        </div>
        <div class="ReviewItem__person">
            <div class="ReviewItem__person-img">
                <NuxtImg src="https://static.vecteezy.com/system/resources/thumbnails/020/630/648/small/retro-illustration-man-thumb-up-vector.jpg" alt="Person"/>
            </div>
            <div class="ReviewItem__person-name">Александр П.</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ReviewItem {
    margin-top: 32px;
    background: #FFF;
    border-radius: 16px;
    border: 1px solid #DADAE0;
    max-width: 400px;
    min-width: 350px;
    padding: 24px;

    @media screen and (max-width: 767px) {
        padding: 16px;
        max-width: 350px;
        min-width: 300px;
    }

    &__rating {
        display: flex;
        gap: 1px;

        &-star {
            width: 14px;
            height: 14px;

            &.fill {
                background: url('~/assets/images/icons/rating-full.svg') no-repeat center center;
            }
        }
    }

    &__text {
        margin-top: 16px;
        font-size: 14px;
        line-height: 20px;
        color: $mainBlack;
        border-bottom: 1px solid #DADAE0;
        padding-bottom: 16px;
    }

    &__person {
        margin-top: 16px;
        display: flex;
        align-items: center;
        gap: 16px;

        &-img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            overflow: hidden;
            background: $lightGreen;
            display: flex;
            align-items: center;
            justify-content: center;

            @media screen and (max-width: 767px) {
                width: 48px;
                height: 48px;
            }
        }

        &-name {
            font-weight: 600;
            color: $mainBlack;
        }
    }
}

</style>