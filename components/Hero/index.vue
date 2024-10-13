<template>
    <section class="hero">
        <div class="hero__content">
            <h1 class="hero__title">
                <b>Teplo<span>Color</span></b> – профессиональна покраска
                с теплом качества и цвета
            </h1>
            <p class="hero__descr">
                Мы предлагаем высококачественные услуги по покраске и покрытию, объединяя современные технологии с
                мастерством опытных специалистов.
            </p>
            <div class="hero__buttons">
                <ButtonPrimary />
                <ButtonSecondary />
            </div>
        </div>
        <div class="hero__img" ref="heroImg">
            <NuxtImg src="/images/main-blob.png" width="560" height="560" alt="TeploColor Main Image" />
            <Pistol />
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero {
    margin-top: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    @media screen and (max-width: 1365px) {
        flex-direction: column;
        gap: 16px;
    }

    &__content {
        max-width: 660px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__title {
        text-align: center;
        font-size: 36px;
        color: $mainBlack;
        line-height: 47px;

        @media screen and (max-width: 1365px) {
            font-size: 24px;
            line-height: 140%;
        }

        & b {
            font-weight: 600;

            & span {
                color: $mainGreen;
            }
        }

    }

    &__descr {
        text-align: center;
        color: $mainBlack;
        line-height: 25px;

        @media screen and (max-width: 1365px) {
            font-size: 14px;
            line-height: 140%;
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        @media screen and (max-width: 767px) {
            flex-direction: column;
            padding: 0 16px;

            .ButtonPrimary, .ButtonSecondary {
                width: 100%;
                align-items: center;
                justify-content: center;
            }
        }
    }

    &__img {
        max-width: 560px;
        width: 100%;
        position: relative;

        @media screen and (max-width: 767px) {
            max-width: 100%;
            max-height: 350px;
        }

        & img {
            @media screen and (max-width: 767px) {
                max-width: 100%;
                max-height: 350px;
                object-fit: contain;
            }
        }


        .pistol {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: transform 0.3s ease, left 0.3s ease;
        }
    }
}

</style>