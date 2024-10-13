<template>
    <section class="choose" ref="choose">
        <div class="choose__container">
            <h2 class="choose__title" ref="chooseTitle">Почему нас выбирают?</h2>
        </div>
        <div class="choose__content">
            <div class="choose__content-text" ref="chooseText">
                <h3 class="choose__content-title">Добавьте тепла и цвета своим изделиям вместе с Teplo<span>Color</span>!</h3>
                <p class="choose__content-descr">Мы обеспечиваем долговечность, эстетическую привлекательность и защиту ваших изделий,
                    используя широкий спектр цветовых решений и материалов.</p>
            </div>

            <div class="choose__content-items" ref="chooseItems">
                <ChooseItem
                        text="Индивидуальный подход"
                        sub="Подбираем оптимальные решения под ваши потребности."
                        image="/images/icons/individual-icon.svg"
                />
                <ChooseItem
                        text="Синергия с teplogarden"
                        sub="Идеальная совместимость и интеграция с продукцией основного бренда."
                        image="/images/icons/individual-icon.svg"
                />
                <ChooseItem
                        text="Экологические материалы"
                        sub="Заботимся об окружающей среде и вашем здоровье."
                        image="/images/icons/eco-icon.svg"
                />
                <ChooseItem
                        text="Соблюдение сроков"
                        sub="Ценим ваше время и всегда выполняем работу вовремя."
                        image="/images/icons/time-icon.svg"
                />
                <ChooseItem
                        text="Современное оборудование"
                        sub="Гарантируем точность и качество нанесения покрытий."
                        image="/images/icons/equipments-icon.svg"
                />
            </div>
        </div>

        <p class="choose__descr">
            Доверьте свой проект профессионалам! С нами ваша продукция будет защищена и выглядит великолепно долгие годы. Свяжитесь с нами
            сегодня, и мы проконсультируем вас по всем вопросам!
        </p>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Ссылки на необходимые элементы
const chooseTitle = ref(null);
const chooseText = ref(null);
const chooseItems = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Добавляем задержку для каждого элемента
                setTimeout(() => {
                    entry.target.classList.add('choose__visible');
                }, index * 200);
            } else {
                entry.target.classList.remove('choose__visible');
            }
        });
    });

    if (chooseTitle.value) {
        observer.observe(chooseTitle.value);
    }

    if (chooseText.value) {
        observer.observe(chooseText.value);
    }

    if (chooseItems.value) {
        const items = chooseItems.value.querySelectorAll('.ChooseItem');
        items.forEach((item, index) => {
            observer.observe(item);
        });
    }
});
</script>

<style scoped lang="scss">
.choose {
    margin-top: 46px;

    &__container {
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
            bottom: -55%;

            @media screen and (max-width: 767px) {
                bottom: 0;
            }
        }
    }

    &__content {
        border-radius: 16px;
        margin-top: 24px;
        width: 100%;

        &-text {
            max-width: 740px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(60px);
            transition: opacity 0.8s ease, transform 0.8s ease;

            &.choose__visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media screen and (max-width: 767px) {
                max-width: 100%;
                padding: 0 16px;
            }
        }

        &-title {
            font-weight: 600;
            font-size: 24px;
            line-height: 40px;
            color: $mainBlack;
            text-align: center;

            & span {
                color: $mainGreen;
            }

            @media screen and (max-width: 767px) {
                line-height: 140%;
                font-size: 18px;
                text-align: left;
            }
        }

        &-descr {
            margin-top: 16px;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #646363;

            @media screen and (max-width: 767px) {
                line-height: 140%;
                font-size: 14px;
                text-align: left;
            }
        }

        &-items {
            margin-top: 32px;
            display: flex;
            justify-content: space-between;
            padding: 0 16px;

            @media screen and (max-width: 1365px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
                gap: 16px;
            }

            .ChooseItem {
                opacity: 0;
                transform: translateY(110px);
                transition: opacity 0.6s ease, transform 0.6s ease;

                &.choose__visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .ChooseItem:last-child {
                @media screen and (max-width: 767px) {
                    width: 100%;
                    grid-column: span 2;
                    justify-self: center;
                }
            }
        }
    }

    &__descr {
        text-align: center;
        max-width: 70%;
        margin: 24px auto 0;
        color: $mainBlack;
        font-size: 18px;
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;

        @media screen and (max-width: 1365px) {
            max-width: 100%;
            font-size: 16px;
        }

        @media screen and (max-width: 767px) {
            display: none;
        }
    }
}
</style>
