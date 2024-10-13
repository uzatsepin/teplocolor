<template>
    <section class="powder" ref="powder">
        <div class="powder__container">
            <h2 class="powder__title" ref="powderTitle">Порошковая покраска</h2>

            <div class="powder__content">
                <div class="powder__content-img" ref="powderContentImg">
                    <NuxtImg src="/images/powder-image.jpg" width="520" height="450" alt="TeploColor – Порошковая покраска"/>
                </div>
                <div class="powder__content-text" ref="powderContentText">
                    <h3 class="powder__content-text-title">Порошковая покраска — надежное и долговечное покрытие от Teplo<span>Color</span></h3>
                    <p class="powder__content-text-descr">
                        <span>Почему порошковая покраска?</span>
                        Это современная технология, которая обеспечивает прочное защитное и декоративное покрытие. Порошковая покраска
                        устойчива к коррозии, механическим повреждениям и выгоранию на солнце.
                    </p>

                    <div class="powder__content-benefits">
                        <h4 class="powder__content-benefits-title">Преимущества порошковой покраски:</h4>
                        <div class="powder__content-benefits-container" ref="powderItems">
                            <PowderItem text="Долговечность и надежность" img="/images/icons/durability-icon.svg"/>
                            <PowderItem text="Экологичность технологии" img="/images/icons/ecology-icon.svg"/>
                            <PowderItem text="Широкий выбор цветов" img="/images/icons/pallete-icon.svg"/>
                            <PowderItem text="Скорость и эффективность" img="/images/icons/speed-icon.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const powderTitle = ref(null);
const powderContentText = ref(null);
const powderContentImg = ref(null);
const powderItems = ref(null); // Ссылка на контейнер с элементами PowderItem

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('powder__visible');
            } else {
                entry.target.classList.remove('powder__visible');
            }
        });
    });

    if (powderTitle.value) {
        observer.observe(powderTitle.value);
    }

    if (powderContentText.value) {
        observer.observe(powderContentText.value);
    }

    if (powderContentImg.value) {
        observer.observe(powderContentImg.value);
    }

    // Наблюдаем за элементами PowderItem
    if (powderItems.value) {
        const items = powderItems.value.querySelectorAll('.PowderItem'); // Получаем все элементы
        items.forEach((item, index) => {
            observer.observe(item);
            // Добавляем задержку для каждого элемента
            item.style.transitionDelay = `${index * 0.2}s`; // 0.2s задержка для каждого следующего элемента
        });
    }
});
</script>

<style scoped lang="scss">
.powder {
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
            bottom: -30%;
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
            bottom: -50%;

            @media screen and (max-width: 767px) {
                bottom: 0;
            }
        }
    }

    &__content {
        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 1365px) {
            flex-direction: column;
            gap: 24px;
        }

        &-img {
            border-radius: 30px;
            overflow: hidden;
            min-width: 520px;
            opacity: 0;
            transform: translateY(120px);
            transition: opacity 0.9s ease, transform 0.9s ease;

            &.powder__visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media screen and (max-width: 767px) {
                min-width: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &-text {
            padding: 0 64px;
            opacity: 0;
            transform: translateY(80px);
            transition: opacity 0.6s ease, transform 0.6s ease;

            &.powder__visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media screen and (max-width: 1365px) {
                padding: 0 32px;
            }

            @media screen and (max-width: 767px) {
                padding: 0;
            }

            &-title {
                font-weight: 600;
                font-size: 26px;
                color: $mainBlack;
                text-align: center;
                line-height: 28px;

                & span {
                    color: $mainGreen;
                }

                @media screen and (max-width: 767px) {
                    text-align: left;
                    font-size: 24px;
                }
            }

            &-descr {
                margin-top: 24px;
                text-align: center;
                font-size: 18px;
                color: $mainBlack;
                line-height: 26px;

                @media screen and (max-width: 767px) {
                    text-align: left;
                    font-size: 16px;
                }
            }
        }

        &-benefits {
            margin-top: 24px;

            &-title {
                font-size: 18px;
                color: $mainBlack;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
            }

            &-container {
                display: flex;
                gap: 48px;
                margin-top: 32px;

                @media screen and (max-width: 767px) {
                    display: grid;
                    grid-template-columns: repeat(2, 2fr);
                    gap: 16px;
                }

                .PowderItem {
                    opacity: 0;
                    transform: translateY(60px);
                    transition: opacity 0.6s ease, transform 0.6s ease; // Настройка переходов

                    &.powder__visible {
                        opacity: 1;
                        transform: translateY(0); // Плавное появление
                    }
                }
            }
        }
    }
}
</style>
