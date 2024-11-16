<template>
    <section class="contact">
        <div class="contact__container">
            <h2 class="contact__title" ref="contactTitle">Хотите получить консультацию?</h2>

            <div class="contact__content">
                <div class="contact__content-text">
                    <h2 class="contact__content-text-title">TeploColour – это не только про качество,
                        но и про клиентоориентированность</h2>
                    <p class="contact__content-text-descr">
                        Оставьте ваши контактные данные и наши менеджеры свяжутся с вами в удобное для вас время для предоставления консультации
                    </p>
                </div>
                <div class="contact__content-form">
                    <ContactForm />

                    <p class="contact__content-text-sub">
                        *Оставляя данные, мы гарантируем, что ваши данные не будут переданы третьим лицам!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const contactTitle = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('contact__title--visible');
            } else {
                entry.target.classList.remove('contact__title--visible');
            }
        });
    });

    if (contactTitle.value) {
        observer.observe(contactTitle.value);
    }
});
</script>

<style scoped lang="scss">
.contact {
    margin-top: 46px;

    &__container {
        display: flex;
        flex-direction: column;
        max-width: 950px;
        margin: 0 auto;

        @media screen and (max-width: 767px) {
            max-width: 100%;
            padding: 0 16px;
        }
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
            right: 0;
            bottom: -60%;
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 0.5s ease, transform 0.5s ease;

            @media screen and (max-width: 767px) {
                right: -25%;
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
        display: flex;
        gap: 64px;
        margin-top: 46px;

        @media screen and (max-width: 1365px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 32px;
            gap: 24px;
        }

        &-text {
            max-width: 490px;

            &-title {
                font-weight: 600;
                font-size: 24px;
                line-height: 140%;
                color: $mainBlack;
                text-align: center;

                @media screen and (max-width: 767px) {
                    font-size: 18px;
                    text-align: left;
                }
            }

            &-descr {
                margin-top: 16px;
                font-size: 16px;
                line-height: 20px;
                color: $mainBlack;
                text-align: center;

                @media screen and (max-width: 767px) {
                    font-size: 14px;
                    text-align: left;
                    margin-top: 8px;
                }
            }

            &-sub {
                margin-top: 16px;
                font-size: 14px;
                line-height: 20px;
                color: #b0b0b4;
                text-align: center;

                @media screen and (max-width: 767px) {
                    display: none;
                }
            }
        }

        &-form {
            .contact__content-text-sub {
                @media screen and (max-width: 767px) {
                    display: flex;
                }
            }
        }
    }
}

</style>