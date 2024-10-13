<template>
    <section class="reviews" ref="reviews">
        <div class="reviews__container">
            <h2 class="reviews__title" ref="reviewTitle">Отзывы наших клиентов</h2>
            <p class="reviews__descr">TeploColor гордится доверием наших клиентов и всегда стремимся предоставлять качественные услуги.
                Надежность, профессионализм и индивидуальный подход — основные принципы нашей работы.</p>

            <div class="reviews__items">
                <ReviewsItem />
                <ReviewsItem />
                <ReviewsItem />
                <ReviewsItem />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const reviewTitle = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reviews__title--visible');
            } else {
                entry.target.classList.remove('reviews__title--visible');
            }
        });
    });

    if (reviewTitle.value) {
        observer.observe(reviewTitle.value);
    }
});
</script>

<style scoped lang="scss">
.reviews {
    margin-top: 46px;

    &__container {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
    }

    &__title {
        font-size: 36px;
        line-height: 61px;
        color: $mainBlack;
        font-weight: 900;
        text-align: center;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 767px) {
            font-size: 28px;
            line-height: 170%;
            text-align: left;
        }

        &:after {
            content: "";
            width: 242px;
            height: 136px;
            background: url("~/assets/images/spray-image.png") no-repeat center / cover;
            margin-top: 24px;
            position: absolute;
            right: 20%;
            bottom: -60%;
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 0.5s ease, transform 0.5s ease;

            @media screen and (max-width: 767px) {
                right: -40%;
                bottom: -10%;
                max-width: 100%;
                max-height: 100%;
            }
        }
        &--visible:after {
            opacity: 1;
            transform: scale(1);
            bottom: -60%;

            @media screen and (max-width: 767px) {
                bottom: 0;
            }
        }
    }

    &__descr {
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: $mainBlack;
        max-width: 850px;
        margin: 16px auto 0;

        @media screen and (max-width: 767px) {
            text-align: left;
            font-size: 14px;
        }
    }

    &__items {
        display: flex;
        gap: 24px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 767px) {
            gap: 16px;
        }
    }
}
</style>
