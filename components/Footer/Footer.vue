<template>
    <footer class="footer" id="#footer">
        <div class="footer__wrapper">
            <div class="footer__container">
                <div class="footer__contacts">
                    <h3 class="footer__title">
                        Контакты
                    </h3>
                    <div class="footer__contacts-address" itemprop="address">
                        Москва, ул. Иванова, д.23
                    </div>
                    <NuxtLink to="#" class="footer__contacts-map">открыть на карте</NuxtLink>
                    <div class="footer__contacts-works">
                        <h5 class="footer__contacts-works-title">Время работы</h5>
                        <time class="footer__contacts-works-time">пн-пт с 9:00 до 18:00</time>
                    </div>
                    <div class="footer__contacts-phone">
                        <a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a>
                    </div>
                    <div class="footer__contacts-social">
                        <NuxtLink to="#" class="footer__contacts-social-link inst" aria-label="Instagram"></NuxtLink>
                        <NuxtLink to="#" class="footer__contacts-social-link fb" aria-label="Facebook"></NuxtLink>
                        <NuxtLink to="#" class="footer__contacts-social-link whatsapp" aria-label="WhatsApp"></NuxtLink>
                        <NuxtLink to="#" class="footer__contacts-social-link tg" aria-label="Telegram"></NuxtLink>
                    </div>
                </div>
                <div class="footer__services">
                    <h3 class="footer__title">
                        Услуги
                    </h3>

                    <ul class="footer__menu">
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Порошковая покраска</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Порошковая покраска</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Порошковая покраска</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__info">
                    <h3 class="footer__title">
                        Информация
                    </h3>

                    <ul class="footer__menu">
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">О компании</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Покупателю</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Оплата</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Гарантия</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Вопросы и ответы</NuxtLink>
                        </li>
                        <li class="footer__menu-list">
                            <NuxtLink to="#" class="footer__menu-list-link">Отзывы</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="footer__copyright-text">
                © 2024 Все права защищены
            </div>
            <div class="footer__copyright-link">TeploColour.ru</div>
        </div>

    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer {
    margin-top: 46px;


    &__wrapper {
        background: #fff;
    }

    &__container {
        max-width: 1356px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 32px 16px;

        @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 24px;
        }
    }

    &__copyright {
        display: flex;
        justify-content: space-between;
        padding: 24px;
        max-width: 1356px;
        margin: 0 auto;

        @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 16px;
            padding: 16px;
        }
    }

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        color: $mainBlack;
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: $mainBlack;

        @media screen and (max-width: 767px) {
            border-bottom: 1px solid #DADAE0;
            padding-bottom: 16px;
        }

        &-map {
            color: $mainGreen;
            line-height: 140%;
            text-decoration-line: underline;
        }

        &-works {
            &-title {
                font-weight: 600;
            }
            &-time {
                margin-top: 16px;
            }
        }

        &-phone {
            a {
                color: $mainBlack;
                line-height: 140%;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 250ms ease-in-out;

                &:before {
                    content: '';
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    background: url('~/assets/images/icons/phone-icon.svg') no-repeat;
                    background-size: contain;
                    margin-right: 8px;
                    transition: all 250ms ease-in-out;
                }

                &:hover {
                    color: $mainGreen;
                    cursor: pointer;

                    &:before {
                        background: url('~/assets/images/icons/phone-icon-hover.svg') no-repeat;
                    }
                }
            }
        }

        &-social {
            display: flex;
            gap: 12px;

            &-link {
                display: inline-block;
                width: 24px;
                height: 24px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                transition: all 250ms ease-in-out;

                &.inst {
                    background-image: url('~/assets/images/icons/inst.svg');
                }

                &.fb {
                    background-image: url('~/assets/images/icons/fb.svg');
                }

                &.whatsapp {
                    background-image: url('~/assets/images/icons/whatsapp.svg');
                }

                &.tg {
                    background-image: url('~/assets/images/icons/tg.svg');
                }
            }
        }
    }

    &__services {
        @media screen and (max-width: 767px) {
            border-bottom: 1px solid #DADAE0;
            padding-bottom: 16px;
        }
    }

    &__menu {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-list {
            &-link {
                color: $mainBlack;
                line-height: 140%;
                transition: all 250ms ease-in-out;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-left: -24px;

                &:hover {
                    color: $mainGreen;
                    cursor: pointer;
                }

                &:before {
                    content: "";
                    display: block;
                    width: 16px;
                    height: 16px;
                    transition: opacity 250ms ease-in-out;
                    background: url("~/assets/images/icons/arrow-right.svg") no-repeat center;
                    opacity: 0;
                }

                &:hover:before {
                    opacity: 1;
                }
            }
        }
    }
}
</style>