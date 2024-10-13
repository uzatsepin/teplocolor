<template>
    <header class="header">
        <div class="header__logo">
            <NuxtImg src="/images/logo.svg" width="98" height="60" alt="TeploColor Logo" />
        </div>
        <nav class="header__menu">
            <ul class="header__menu-list">
                <li class="header__menu-list-item">
                    <NuxtLink class="header__menu-list-link" to="#">Услуги</NuxtLink>
                </li>
                <li class="header__menu-list-item">
                    <NuxtLink class="header__menu-list-link" to="#">Почему мы</NuxtLink>
                </li>
                <li class="header__menu-list-item">
                    <NuxtLink class="header__menu-list-link" to="#">Цены</NuxtLink>
                </li>
                <li class="header__menu-list-item">
                    <NuxtLink class="header__menu-list-link" to="#">Контакты</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="header__right">
            <div class="header__contacts">
                <div class="header__contacts-text" @click="popupOpenHandler">
                    Связь с нами
                </div>
                <transition name="popup-anim">
                    <div class="header__contacts-popup" v-if="popupOpen">
                        <div class="header__contacts-popup-phone">
                            <a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a>
                        </div>
                        <div class="header__contacts-popup-address">Москва, ул. Иванова, д.23</div>
                    </div>
                </transition>
            </div>
            <div class="header__button">
                <ButtonContact />
            </div>
        </div>
        <transition name="popup-anim">
            <div class="header__overlay" v-if="popupOpen" @click="popupCloseHandler"></div>
        </transition>
    </header>
</template>

<script setup lang="ts">

const popupOpen = ref(false)

const popupOpenHandler = () => {
    popupOpen.value = true
    document.querySelector('body')?.classList.add('scroll-lock')
}

const popupCloseHandler = () => {
    popupOpen.value = false
    document.querySelector('body')?.classList.remove('scroll-lock')
}

</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 16px 0 16px;

    &__menu {
        @media screen and (max-width: 1365px) {
            display: none;
        }

        &-list {
            display: flex;
            align-items: center;
            gap: 16px;

            &:hover {
                cursor: pointer;
            }

            &-link {
                padding: 8px 12px;
                color: $mainBlack;
                font-size: 16px;
                transition: all 250ms ease-in-out;
                border-radius: 8px;
                font-weight: 600;

                &:hover {
                    background: $lightGreen;
                    color: $mainGreen;
                    cursor: pointer;
                }
            }
        }
    }

    &__right {
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
    }

    &__contacts {
        color: $mainBlack;
        padding: 8px 16px;
        border-radius: 16px;
        position: relative;

        &-text {
            color: $mainBlack;
            position: relative;
            transition: color 250ms ease-in-out;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;

            &:hover {
                cursor: pointer;
                color: $mainGreen;
            }
            &:before {
                content: '';
                display: inline-block;
                width: 24px;
                height: 24px;
                background: url("~/assets/images/icons/phone-icon.svg") no-repeat center;
                background-size: contain;
                transition: all 250ms ease-in-out;
            }

            &:after {
                content: '';
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("~/assets/images/icons/arrow-down.svg") no-repeat center;
                background-size: contain;
                transition: all 250ms ease-in-out;
            }
            &:hover:after {
                background: url("~/assets/images/icons/arrow-down-hover.svg") no-repeat center;
                background-size: contain;
            }

            &:hover:before {
                background: url("~/assets/images/icons/phone-icon-hover.svg") no-repeat center;
                background-size: contain;
            }
        }

        &-popup {
            position: absolute;
            top: 64px;
            left: 0;
            width: 250px;
            padding: 16px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            z-index: 999;

            @media screen and (max-width: 767px) {
                left: -50%;
            }

            &-phone {
                padding-bottom: 16px;
                border-bottom: 1px solid #DADAE0;
                a {
                    color: $mainBlack;
                    line-height: 140%;
                    display: flex;
                    align-items: center;
                    gap: 16px;
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
                        transition: all 250ms ease-in-out;

                        &:before {
                            background: url('~/assets/images/icons/phone-icon-hover.svg') no-repeat;
                            background-size: contain;
                        }
                    }
                }
            }

            &-address {
                margin-top: 16px;
                padding-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 16px;
                transition: all 250ms ease-in-out;

                &:before {
                    content: "";
                    width: 24px;
                    height: 24px;
                    background: url("~/assets/images/icons/location-icon.svg") no-repeat center;
                    background-size: contain;
                    display: block;
                }

                &:hover {
                    cursor: pointer;
                    color: $mainGreen;

                    &:before {
                        background: url("~/assets/images/icons/location-icon-hover.svg") no-repeat center;
                        background-size: contain;
                    }
                }
            }

        }
    }

    &__button {
        @media screen and (max-width: 767px) {
            display: none;
        }
    }

    &__overlay {
        width: 100%;
        height: calc(100vh - 80px);
        background: #1C1C29;
        opacity: 0.4;
        position: absolute;
        left: 0;
        top: 80px;
        z-index: 99;

        &:hover {
            cursor: initial;
        }

    }
}

</style>